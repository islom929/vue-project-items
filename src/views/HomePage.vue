<script setup>
import CardItem from '@/components/CardItem.vue'
import TheLoader from '@/components/TheLoader.vue'
import axios from 'axios'
const API_URL = 'https://fortniteapi.io/v1/shop?lang=en'
const API_KEY = '24b5e3f5-99288636-9331f6b5-2c7a5abb'
import {reactive} from 'vue'

const arr = reactive([])

const getItem = async () => {
  const res = await axios.get(API_URL,{ headers: {Authorization: API_KEY}})

  res.data.featured.forEach(item => arr.push(item))
}

getItem()

</script>

<template>
  <div>
    <h1></h1>

    <div class="card" v-if="arr.length !== 0">
      <card-item v-for="item in arr" :key="item.id" :item="item" :img="item.image" :title="item.name" :price="item.price">
      </card-item>
    </div>
    <div class="loader-box" v-if="arr.length === 0">
      <the-loader></the-loader>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    display: flex;
    flex-wrap: wrap;
  }
  .loader-box {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>