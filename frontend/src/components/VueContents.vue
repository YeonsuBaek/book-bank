<template>
  <div>
    <VueSearch :bookListNaver="bookListNaver" @addBook="getBook" />
    <VueList
      :myBooks="myBooks"
      @deleteBook="popSelectedBook"
      @deleteBookAll="popAllBook"
    />
    <button type="button" @click="getBookList">버튼</button>
  </div>
</template>

<script>
import VueSearch from "./VueSearch.vue";
import VueList from "./VueList.vue";
import { ref } from "vue";
import axios from "axios";

export default {
  components: { VueSearch, VueList },

  data() {
    return {
      bookListNaver: [],
      myBooks: ref([]),
    };
  },

  mounted() {
    this.getBookList();
  },

  methods: {
    getBookList() {
      const URL =
        "/v1/search/book_adv.json?sort=date&d_titl=%EC%A3%BC%EC%8B%9D&display=100&start=1";
      const clientId = "zgbEsWEnyJr6pCA8UVpd";
      const clientSecret = "OLVRRFKjNd";

      axios
        .get(URL, {
          headers: {
            Accept: "application/json",
            "X-Naver-Client-Id": clientId,
            "X-Naver-Client-Secret": clientSecret,
          },
        })
        .then((response) => {
          let test = [];
          test = test.concat(response.data.items);
          this.bookListNaver = this.bookListNaver.concat(test);
        });
    },

    getBook(bookTitle) {
      const bookIndex = this.bookListNaver.findIndex(
        (v) => v.title === bookTitle
      );
      this.myBooks.push({
        index: bookIndex,
        title: this.bookListNaver[bookIndex].title,
        author: this.bookListNaver[bookIndex].author,
        price: this.bookListNaver[bookIndex].discount
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      });
    },

    popSelectedBook(index) {
      this.myBooks.splice(index, 1);
    },

    popAllBook() {
      this.myBooks = [];
    },
  },
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
