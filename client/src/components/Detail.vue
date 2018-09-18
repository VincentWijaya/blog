<template>
  <div class="my-4 mx-5">

    <div class="card-body mt-5">
      <h2 class="card-title text-center display-4">{{ this.article.title }}</h2>
      <p class="card-text">{{ this.article.content }}</p>
    </div>
    <div class="card-footer text-muted">
      Posted on {{ this.created }} by {{ this.name }}
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'detail',
  props: ['id'],
  data: function () {
    return {
      article: {},
      name: '',
      created: ''
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
  }
}
</script>
