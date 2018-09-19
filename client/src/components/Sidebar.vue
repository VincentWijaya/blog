<template>
  <div class="my-5">
    <button type="button" class="btn btn-primary mb-3" v-if="datalocal" data-toggle="modal" data-target="#addArticleModal">Add Article</button>
    <h1>List Articles</h1>
    <div class="list-group">

      <div class="list-group-item" v-for="article in articles" :key="article._id" v-if="isLoad">
        <router-link class="sidebar-title" :to="{ name: 'article-detail', params: {id: article._id} }">{{ article.title }}</router-link>
        <h6>By: {{ article.userId.name }}</h6>
        <button type="button" class="btn btn-sm btn-danger" v-if="article.isHim" @click="deleteArticle(article._id)">Delete</button>
      </div>
      <div class="loader" v-if="!isLoad"></div>

    </div>

    <!-- Modal Add Article -->
    <div class="modal fade" id="addArticleModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Add Article</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">

            <div class="container">
              <form>
                <div class="form-group">
                  <label for="title">Title:</label>
                  <input type="text" class="form-control" v-model="title" required>
                </div>
                <div class="form-group">
                  <label for="content">Content:</label>
                  <textarea rows="8" cols="80" v-model="content" class="form-control"></textarea>
                </div>
              </form>

            </div>

          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="addArticle">Add Article</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'sidebar',
  props: ['datalocal'],
  data: function () {
    return {
      articles: [],
      title: '',
      content: '',
      isLoad: false
    }
  },
  methods: {
    addArticle () {
      let self = this

      axios({
        method: 'post',
        url: 'http://api.blog.skinborderevent.ml/articles',
        data: {
          title: this.title,
          content: this.content
        },
        headers: {
          token: this.datalocal.token
        }
      })
        .then(response => {
          response.data['isHim'] = true
          self.articles.push(response.data)
        })
        .catch(err => {
          if (err.response) {
            alert(err.response.data.error)
          } else {
            console.log(err)
          }
        })
    },
    deleteArticle (id) {
      let self = this
      let indexArticle

      this.articles.forEach((article, index) => {
        if (article._id === id) {
          indexArticle = index
        }
      })

      axios({
        method: 'delete',
        url: `http://api.blog.skinborderevent.ml/articles/${id}`,
        headers: {
          token: this.datalocal.token
        }
      })
        .then(() => {
          self.articles.splice(indexArticle, 1)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    let self = this

    axios({
      method: 'get',
      url: 'http://api.blog.skinborderevent.ml/articles'
    })
      .then(response => {
        let user = self.datalocal.email

        response.data.forEach(article => {
          if (article.userId.email === user) {
            article['isHim'] = true
          } else {
            article['isHim'] = false
          }
        })

        self.articles = response.data
        self.isLoad = true
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
  .sidebar-title {
    font-size: 1.5rem;
  }

  .loader {
      border: 16px solid #f3f3f3; /* Light grey */
      border-top: 16px solid #3498db; /* Blue */
      border-radius: 50%;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
  }

  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }
</style>
