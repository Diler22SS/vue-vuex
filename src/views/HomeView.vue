<template>
  <div class="home">
    <CounterPowScreen />
    <PowScreen />
    <InputPow />
    <CounterButton />
  </div>
</template>

<script>
import CounterPowScreen from "../components/CounterPowScreen.vue";
import PowScreen from "../components/PowScreen.vue";
import InputPow from "../components/InputPow.vue";
import CounterButton from "../components/CounterButton.vue";
export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: { CounterPowScreen, PowScreen, InputPow, CounterButton },
};
</script>

<style>
div {
  margin-bottom: 30px;
}
.counter {
  font-size: 80px;
}
.button {
  font-size: 40px;
}
button {
  margin: 20px;
}
</style>
