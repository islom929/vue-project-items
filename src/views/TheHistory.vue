<script setup>
import HistoryItem from '../components/HistoryItem';
import {useStore} from 'vuex'

const store = useStore()


</script>

<template>
  <div>
    <history-item v-for="item of store.state.historyItems"
      :key="item.id"
      :item="item"
      :name="item.name"
      :status="item.status"
      :img="item.img"
    ></history-item>
  </div>
</template>

<style lang="scss">

</style>