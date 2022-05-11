<script setup>
  import logoVue from '../assets/logo.png'
</script>

<template>
  <nav>
    <div>
      <router-link to="/">
        <img :src="logoVue">
      </router-link>
      <div>
        <router-link to="/cart" active-class="active">Cart</router-link>
        <router-link to="/history" active-class="active">History</router-link>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  nav {
    background-color: #16537e;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  img {
    margin: 20px auto 30px auto;
    width: 40px;
    height: 40px;
    display: block;
  }
  a {
    width: 100%;
    padding: 15px;
    text-align: center;
    font-size: 20px;
    color: #f3f3f3;
    text-decoration: none;
  }
  a.active {
    background-color: #f3f3f3;
    color: #16537e;
    position: relative;
  }
</style>