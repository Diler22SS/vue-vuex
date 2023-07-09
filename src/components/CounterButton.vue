<template>
  <div class="button">
    <button
      @click="$store.commit('decreaseCounter', parseInt($store.state.number))"
    >
      - {{ $store.state.number }}
    </button>
    <button
      @click="$store.commit('increaseCounter', parseInt($store.state.number))"
    >
      + {{ $store.state.number }}
    </button>
    <br />
    <button @click="$store.dispatch('decreaseCounter')">- 10</button>
    <button @click="$store.dispatch('increaseCounter')">+ 10</button>
  </div>
</template>
