<template>
  <header class="globalHeader">
    <h1 class="title">Book Bank</h1>
    <button class="blueButton sharingButton" type="button">공유하기</button>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.globalHeader {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #d7dde3;
}

.title {
  color: #2d2e2f;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}
</style>
