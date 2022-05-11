<script setup>
import {defineProps} from 'vue'

const props = defineProps(['item','name','status','img'])
</script>

<template>
  <div :class="props.status">
    <img :src="props.img">

    <h1>{{props.name}}</h1>

    <p>This item was <span v-if="props.status !== 'remove'">{{props.status}}ed</span>
    <span v-if="props.status === 'remove'">removed</span></p>
  </div>
</template>

<style lang="scss" scoped>
.add {
  background-color: #6aa84f;
}
.subtract {
  background-color: #f1c232;
}
.remove {
  background-color: #cc0000;
}


  div {
    display: flex; 
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    border-radius: 9px;
    padding: 5px 40px 5px 5px ;

    h1 {
      width: 40%;
      text-align: center;
      font-size: 30px;
      color: #f2f2f2;
    }

    img {
      width: 200px;
      height: 100%;
      object-fit: cover;
    }

    p {
      font-size: 25px;
      color: #fcf2d6;
    }
  }
</style>