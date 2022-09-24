<template>
  <div>
    <VueHeader />
    <VueContents />
  </div>
</template>

<script>
import VueHeader from "./components/VueHeader.vue";
import VueContents from "./components/VueContents.vue";

export default {
  components: {
    VueHeader,
    VueContents,
  },
};
</script>

<style>
@import "./assets/grids.css";
@import "./assets/style.css";

button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: 36px;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
}

.blueButton {
  background-color: #0085f9;
}

.blueButton:is(:hover, :active) {
  background-color: #006ac7;
}

.redButton {
  background-color: #ff3859;
}

.redButton:is(:hover, :active) {
  background-color: #e81e40;
}
</style>
