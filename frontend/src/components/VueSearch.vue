<template>
  <section class="search">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <h2 class="subTitle">읽은 책을 검색해주세요</h2>

          <form class="searchForm">
            <input
              class="searchInput"
              type="text"
              placeholder="도서명이나 바코드 번호를 입력해주세요"
            />

            <button class="blueButton searchButton" type="button">검색</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.searchForm {
  display: flex;
  align-items: start;
  justify-content: space-between;
}
.searchInput {
  padding: 0 16px;
  margin-right: 8px;
  width: 100%;
  height: 36px;
  border: 1px solid #d7dde3;
  border-radius: 4px;
  outline: 0;
}

.searchInput::placeholder {
  color: #c1c6cc;
}

.searchButton {
  flex-shrink: 0;
}
</style>
