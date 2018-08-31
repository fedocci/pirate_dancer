<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture">
          <img :src="this.catUrl"/>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">Describe me</label>
        </div>
        <div class="actions">
          <a @click.prevent="postCat" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST A CAT
          </a>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
  // import parse from 'xml-parser'
  export default {
    data () {
      return {
        'catUrl': null,
        'title': ''
      }
    },
    mounted () {
      let cat = [
        {
          'id': '1g3',
          'url': 'https://28.media.tumblr.com/tumblr_lyxl8v7Wdr1qa4yh0o1_500.png',
          'source_url': 'https://thecatapi.com/?image_id=1g3'
        }
      ]
      this.catUrl = cat[0].url
      // console.log('teste')
      // this.$http.get('https://thecatapi.com/api/images/get?format=json&results_per_page=1').then(response => {
      //   console.log('teste', JSON.stringify(response.body))
      //   this.catUrl = parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content
      // }, err => {
      //   console.log('teste333', err)
      // })
    },
    methods: {
      postCat () {
        this.$root.$firebaseRefs.cat.push(
          {
            'url': this.catUrl,
            'comment': this.title,
            'info': 'Posted by Charles on Tuesday',
            'created_at': -1 * new Date().getTime()
          })
          .then(this.$router.push('/'))
      }
    }
  }
</script>
<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }
</style>
