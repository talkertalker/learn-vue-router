<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>Vue is a powerful JavaScript library.</h2>
    <p>Click the links to see some examples of what you can do!</p>
    <nav>
      <a href="">Alter CSS</a>・
      <a href="/#/DataBindingDemo">Two-way Data Binding</a>・
      <a href="">Some other one</a>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p {
  margin-top: -20px;
}
</style>
