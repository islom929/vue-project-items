<template>
  <div class="main">
    <the-sidebar class="side-bar"></the-sidebar>
    <div class="hero">
      <div class="container hero__container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheSidebar from './components/TheSidebar.vue';
</script>

<style lang="scss">
  @import './normalize.css';
  html {
    box-sizing: border-box;
    height: 100%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #fff;
  }
  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    padding: 0 25px;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  }

  .main {
    display: flex;
    padding-left: 200px;

    .side-bar {
      position: fixed;
      width: 200px;
      height: 100vh;
      left: 0;
    }

    .hero {
      width: 100%;
      height: 100vh;
      overflow: hidden;
      background-color: #f2f2f2;

      .hero__container {
        overflow-y: auto;
        height: 100%;

        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
</style>