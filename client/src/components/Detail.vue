<template>
  <div class="card mb-4 my-5 mx-5 px-3">

    <div class="card-body">
      <h2 class="card-title text-center display-4">{{ this.article.title }}</h2>
      <p class="card-text">{{ this.article.content }}</p>
    </div>
    <div class="card-footer text-muted mb-5">
      Posted on {{ this.created }} by {{ this.name }}
    </div>

    <div class="my-3" v-if="datalocal">
      <div class="form-group row">
        <div class="col-lg-5">
          <textarea class="form-control" rows="2" placeholder="Comment........." v-model="comment"></textarea>
          <br>
          <button type="button" class="btn btn-primary">Comment</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'detail',
  props: ['id', 'datalocal'],
  data: function () {
    return {
      article: {},
      name: '',
      created: '',
      comment: ''
    }
  },
  created () {
    let self = this

    axios({
      method: 'get',
      url: `http://localhost:3000/articles/${this.id}`
    })
      .then(response => {
        self.created = new Date(response.data.createdAt).toLocaleDateString()
        self.name = response.data.userId.name
        self.article = response.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  watch: {
    id: function () {
      let self = this

      axios({
        method: 'get',
        url: `http://localhost:3000/articles/${this.id}`
      })
        .then(response => {
          self.created = new Date(response.data.createdAt).toLocaleDateString()
          self.name = response.data.userId.name
          self.article = response.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
