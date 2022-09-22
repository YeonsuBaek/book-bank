<template>
  <section class="search">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="subTitle">
            <h2>읽은 책을 추가해주세요</h2>
          </div>

          <form class="searchForm">
            <input
              class="searchInput"
              type="text"
              placeholder="도서명이나 바코드 번호를 입력해주세요"
              list="bookDataList"
            />

            <datalist class="searchDataList" id="bookDataList">
              <option
                v-for="book in booklist"
                :key="book"
                :value="book.title"
              />
            </datalist>

            <button
              class="blueButton searchButton"
              type="button"
              @click="getBookList"
            >
              추가
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    booklist: Array,
  },
};
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
