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
            <span class="bookAuthor">분야</span>
            <span class="bookPrice">가격</span>
          </div>

          <ul class="booklistList">
            <li
              class="booklistItem"
              v-for="(myBook, index) in myBooks"
              :key="myBook.index"
            >
              <span class="bookNumber">
                <div :class="{ hidden: numberHidden }">
                  {{ index + 1 }}
                </div>
                <button
                  class="deleteBookButton"
                  :class="{ hidden: checkboxHidden }"
                  type="button"
                  @click="deleteBookItem(index)"
                >
                  ❌
                </button>
              </span>
              <span class="bookTitle">{{ myBook.title }}</span>
              <span class="bookAuthor">{{ myBook.author }}</span>
              <span class="bookPrice">{{ myBook.price }}</span>
            </li>
          </ul>

          <button
            class="deleteButton redButton"
            :class="{ hidden: buttonHidden }"
            type="button"
            @click="readyToDelete"
          >
            {{ deleteButton }}
          </button>
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
      deleteButton: "삭제",
      buttonHidden: true,
      checkboxHidden: true,
      numberHidden: false,
    };
  },

  methods: {
    showDeleteButton() {
      if (this.myBooks.length !== 0) {
        this.buttonHidden = false;
      }
    },

    readyToDelete() {
      if (this.deleteButton === "취소") {
        this.numberHidden = false;
        this.checkboxHidden = true;
        this.deleteButton = "삭제";
      } else {
        this.numberHidden = true;
        this.checkboxHidden = false;
        this.deleteButton = "취소";
      }
    },

    deleteBookItem(index) {
      this.$emit("deleteBook", index);

      if (this.myBooks.length === 0) {
        this.numberHidden = false;
        this.checkboxHidden = true;
        this.deleteButton = "삭제";
        this.buttonHidden = true;
      }
    },
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
      this.showDeleteButton();
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

.booklistList {
  margin-bottom: 16px;
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

.bookNumber .hidden {
  display: none;
}

.bookAuthor {
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

.deleteButton.hidden {
  display: none;
}

.deleteButton {
  display: block;
  margin: 0 auto;
}

.deleteBookButton.hidden {
  display: none;
}

.deleteBookButton {
  display: block;
  margin: 0 auto;
  color: #ff3859;
}
</style>
