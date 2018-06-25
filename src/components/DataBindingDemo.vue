<template>
  <div class="data-binding-demo-component">
    <h3>Type something into the input box and watch the DOM update instantly.</h3>
    <input v-model="message" type="text" placeholder="Type something here..."/>
    <p class="output">{{message}}</p>
    <p>Vue provides directives like <span>v-model</span> that allow you to bind your DOM elements to data.</p>
  </div>
</template>

<script>
export default {
  name: 'DataBindingDemo',
  data () {
    return {
      message: 'Change this message!'
    }
  }
}
</script>

<style scoped>
input {
  text-align: center;
}

.output {
  margin-top: 20px;
  font-style: italic;
}

div p:nth-child(4) {
  margin-top: 20px;
}

p span {
  font-family: Courier;
  background: #dbdbdb;
  padding: 0 5px;
}
</style>
