<script setup>
  import { useStore } from 'vuex'
  import {defineProps, ref,watch} from 'vue'
  const props = defineProps(['img','title','price','item'])
  let isClicked = ref(false)

  const store = useStore()

  watch(isClicked, () => {

    const findEl = store.state.selectedItems.find(el => el.id === props.item.id)

    if (isClicked.value) {

      store.state.historyItems.push({
          name: props.item.name,
          price: props.item.price,
          img: props.item.image,
        status: 'add'
      })

      if (!findEl) {
        store.state.selectedItems.push({
          id: props.item.id,
          name: props.item.name,
          price: props.item.price,
          img: props.item.image,
          quantity: 1
        })
      }
      if (findEl) {
        findEl.quantity += 1
      }

      console.log(store.state.selectedItems);

      setTimeout(() => {
        isClicked.value = false
      }, 1000);
    }
  })

</script>

<template>
  <div>
    <img :src="props.img">
    <h2>{{props.title}}</h2>
    <h3>{{props.price}} $</h3>
    <button :class="isClicked === true && 'active-btn'" @click="isClicked = true">Add to Cart</button>
  </div>
</template>

<style lang="scss" scoped>
  div {
    width: 30%;
    height: 520px;
    margin: 15px;
    border: 1px solid #999;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  h2 {
    text-align: center;
    color: #657595;
  }
  h3 {
    text-align: center;
    color: #76a5af;
  }
  button {
    width: 70%;
    padding: 15px;
    border-radius: 8px;
    border: none;
    background-color: #2a5d8a;
    color: #f2f2f2;
    font-size: 20px;
    transition: .3s ease all;
  }
  .active-btn {
    background-color: #458a28;
  }
</style>