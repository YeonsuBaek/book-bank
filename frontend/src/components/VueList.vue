<template>
  <section class="booklist">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="subTitle">
            <h2>이만큼 읽었어요!</h2>
            <strong>{{ sumBookPrice }}원</strong>
          </div>

          <div class="booklistHeader">
            <span class="bookNumber">No.</span>
            <span class="bookTitle">제목</span>
            <span class="bookCategory">분야</span>
            <span class="bookPrice">가격</span>
          </div>

          <ul class="booklistList">
            <li
              class="booklistItem"
              v-for="(myBook, index) in myBooks"
              :key="myBook.index"
            >
              <span class="bookNumber">{{ index + 1 }}</span>
              <span class="bookTitle">{{ myBook.title }}</span>
              <span class="bookCategory">{{ myBook.category }}</span>
              <span class="bookPrice">{{ myBook.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    myBooks: Array,
  },

  data() {
    return {
      totalPrice: 0,
    };
  },

  computed: {
    sumBookPrice() {
      let totalPrice, currentPrice;

      totalPrice = "0";

      for (let i = 0; i < this.myBooks.length; i++) {
        totalPrice = Number(totalPrice.replace(",", ""));
        currentPrice = Number(this.myBooks[i].price.replace(",", ""));
        totalPrice += currentPrice;
        totalPrice = totalPrice
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

      return totalPrice;
    },
  },
};
</script>

<style scoped>
.booklistHeader,
.booklistItem {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 40px;
}

.booklistHeader {
  color: #969a9e;
  border-bottom: 1px solid #d7dde3;
}

.booklistItem span {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.bookNumber {
  width: 72px;
  text-align: center;
}

.bookCategory {
  width: 160px;
  text-align: center;
}

.bookTitle {
  width: 248px;
}

.bookPrice {
  width: 160px;
  padding-right: 10px;
  text-align: right;
}
</style>
