<template>
  <div>
    <VueSearch />
    <VueList />
  </div>
</template>

<script>
import VueSearch from "./VueSearch.vue";
import VueList from "./VueList.vue";
export default {
  components: { VueSearch, VueList },
};
</script>

<style>
section {
  padding-top: 72px;
}

section:first-child {
  padding-top: 108px;
}

.subTitle {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0 0 16px 10px;
  color: #2d2e2f;
  font-size: 18px;
}

.subTitle h2 {
  font-weight: 400;
}
</style>
