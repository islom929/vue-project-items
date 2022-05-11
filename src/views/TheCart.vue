<script setup>
import {useStore} from 'vuex'
import CartItem from '../components/CartItem.vue'

const store = useStore()

</script>

<template>
  <div>
    <cart-item v-for="item in store.state.selectedItems"
      :key="item.id"
      :item="item"
      :price="item.price"
      :name="item.name"
      :img="item.img"
      :quantity="item.quantity"
    > </cart-item>
  </div>
</template>

<style lang="scss">

</style>