<template>
  <div class="card">
    <img :src="props.img" alt="">

    <div class="card-title__box">
      <h1>{{props.name}}</h1>
      <span>
        <h3>Quantity:  {{props.quantity}}</h3>
        <h2>Price:  {{props.price * props.quantity}} $</h2>
      </span>
    </div>
    <div class="card-btn__box">
      <span><button @click="decrement" :disabled="!props.quantity" class="decrement">Subtract</button><button @click="increment" class="increment">Add</button></span>
      <button @click="remove" class="remove">Remove</button>
    </div>
  </div>
</template>
<script setup>
import {defineProps, watch} from 'vue'
import { useStore } from 'vuex'
const props = defineProps(['item','img','price','name','quantity'])

const store = useStore()

const findEl = store.state.selectedItems.find(el => el.id === props.item.id)

const remove = () => {
  const filterEl = store.state.selectedItems.filter(el => el.id !== props.item.id)

  store.state.selectedItems = filterEl
  store.state.historyItems.push({
      ...props.item,
      status: 'remove'
    })
}

const decrement = () => {
  if (findEl.quantity) {
    findEl.quantity -= 1

    store.state.historyItems.push({
      ...props.item,
      status: 'subtract'
    })
  }
}

watch(props.item, () => {
  console.log(store.state.historyItems);
})

const increment = () => {
  findEl.quantity += 1

    store.state.historyItems.push({
    ...props.item,
    status: 'add'
  })
}

</script>
<style lang="scss" scoped>
  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1.5px solid #000;
    border-radius: 12px;
    margin: 20px 0;

    img {
      width: 200px;
      height: 100%;
      object-fit: cover;
    }

    .card-title__box {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      span {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    .card-btn__box {
      width: 26%;
      margin-right: 30px;
      display: flex;
      flex-direction: column;

      span {
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
          padding: 10px 5px;
          width: 48%;
          color: #fff;
          border: none;
          border-radius: 8px;
        }

        .increment {
          background-color: #6aa84f;
        }
        .decrement {
          background-color: #f1c232;
        }
      }
      .remove {
        margin-top: 15px;
        background-color: #cc0000;
        color: #fff;
        border: none;
        border-radius: 8px;
        padding: 10px;
      }
    }
  }
</style>