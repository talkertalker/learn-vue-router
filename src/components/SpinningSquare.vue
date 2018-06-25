<template>
  <div class="spinning-square-component">
    <h2>Alter CSS</h2>
    <h3>Handle events and change CSS easily by using state.</h3>
    <p>Vue even allows you to use inline conditional statements to designate class names.</p>
    <div v-bind:class="[isFast ? 'fastSpin' : 'slowSpin', 'square']"></div>
    <button v-on:click="changeRotateSpeed">rotate {{isFast ? "slower" : "faster"}}</button>

    <p class="state-value">The value of the boolean property <span>isFast = {{isFast}}</span></p>
  </div>
</template>

<script>
export default {
  name: 'SpinningSquare',
  data () {
    return {
      isFast: false
    }
  },
  methods: {
    changeRotateSpeed: function () {
      this.isFast = !this.isFast
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h2 {
  text-decoration: underline;
}

.square {
  height: 100px;
  width: 100px;
  background: #76bebf;
  margin: 40px auto;
}

.slowSpin {
  animation: spin-animation 5s linear infinite;
}

.fastSpin {
  animation: spin-animation 2s linear infinite;
  background: #83cfd1;
}

.state-value {
  margin-top: 20px;
}

p span {
  font-family: Courier;
  background: #dbdbdb;
}

@keyframes spin-animation {
  0% {transform: rotate(0deg);}
  50% {transform: rotate(180deg);}
  100% {transform: rotate(360deg);}
}
</style>
