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

.blueButton {
  padding: 0 16px;
  height: 36px;
  color: #fff;
  font-size: 16px;
  background-color: #0085f9;
  border-radius: 4px;
}

.blueButton:is(:hover, :active) {
  background-color: #006ac7;
}
</style>
