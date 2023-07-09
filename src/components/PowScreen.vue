<template>
  <div class="counter-squared">
    {{ $store.state.counter }} <sup>{{ $store.state.degree }}</sup> =
    {{ $store.getters.counterPow }}
  </div>
</template>
