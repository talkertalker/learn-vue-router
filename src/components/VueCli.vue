<template>
  <div>
    <h2>The vue-cli</h2>
    <h3>Quickly scaffold large Vue projects in the command line.</h3>
    <p>You can easily add the Vue.js library to your project<br/>by including the following script in your index.html file:</p>
    <p class="codesnippet">&lt;script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"&gt;&lt;/script&gt;</p>
    <p>However, Vue also provides a command line tool called the vue-cli that allows you to build entire</p>
    <p>projects from templates. This is especially useful for large-scale projects or projects that</p>
    <p>require additional plugins and packages like webpack and ESLint!</p>
    <div class="explanation">
      <p><a href="https://cli.vuejs.org/">Click here</a> to read the official vue-cli documentation,</p>
      <p>or <a href="https://www.youtube.com/watch?v=6noJ0dlG7jM">click here</a> to watch a video.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueCli'
}
</script>

<style scoped>
h2 {
  text-decoration: underline;
}

.codesnippet {
  font-family: Courier;
  background: #dbdbdb;
  padding: 5px;
  width: 750px;
  margin: 20px auto 40px auto;
}

.explanation {
  margin-top: 40px;
}
</style>
