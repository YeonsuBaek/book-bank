<template>
  <section class="search">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="subTitle">
            <h2>읽은 책을 추가해주세요</h2>
          </div>

          <form class="searchForm" @submit.prevent="onSubmit">
            <input
              class="searchInput"
              type="text"
              placeholder="도서명이나 바코드 번호를 입력해주세요"
              list="bookDataList"
              v-model="bookTitle"
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
              type="submit"
              @click="submitBook"
            >
              추가
            </button>
          </form>

          <div class="searchErrorToast" :class="{ isActive: searchError }">
            <strong>해당 도서가 존재하지 않습니다</strong>
          </div>
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

  data() {
    return {
      bookTitle: "",
      searchError: false,
    };
  },

  methods: {
    submitBook() {
      if (
        this.bookTitle === "" ||
        !this.booklist.some((book) => book.title === this.bookTitle)
      ) {
        this.searchError = true;
      } else {
        this.searchError = false;
        this.$emit("addBook", this.bookTitle);
        this.bookTitle = "";
      }
    },
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

.searchErrorToast {
  display: none;
}

.searchErrorToast.isActive {
  display: block;
  padding: 8px;
  color: #ff3859;
}
</style>
