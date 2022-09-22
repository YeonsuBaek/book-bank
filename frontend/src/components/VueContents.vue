<template>
  <div>
    <VueSearch :booklist="booklist" @addBook="getBook" />
    <VueList :myBooks="myBooks" />
  </div>
</template>

<script>
import VueSearch from "./VueSearch.vue";
import VueList from "./VueList.vue";
import Datalist from "@/assets/booklist.json";
import { ref } from "vue";

const booklist = Datalist;

export default {
  components: { VueSearch, VueList },

  data() {
    return {
      booklist,
    };
  },

  setup() {
    const myBooks = ref([]);

    const getBook = (bookTitle) => {
      const bookIndex = booklist.findIndex((v) => v.title === bookTitle);

      myBooks.value.push({
        index: bookIndex,
        title: booklist[bookIndex].title,
        category: booklist[bookIndex].category,
        price: booklist[bookIndex].price,
      });
    };

    return {
      myBooks,
      getBook,
    };
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
