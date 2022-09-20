<template>
  <section class="booklist">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="subTitle">
            <h2>이만큼 읽었어요!</h2>
            <strong>100,000원</strong>
          </div>

          <div class="booklist-header">
            <span class="book-num">No.</span>
            <span class="book-title">제목</span>
            <span class="book-category">분야</span>
            <span class="book-price">가격</span>
          </div>

          <ul class="booklist-list">
            <li class="booklist-item">
              <span class="book-num">1</span>
              <span class="book-title">Operating System Concepts</span>
              <span class="book-category">IT/컴퓨터</span>
              <span class="book-price">45,000원</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.booklist-header,
.booklist-item {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 40px;
}

.booklist-header {
  color: #969a9e;
  border-bottom: 1px solid #d7dde3;
}

.booklist-item span {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.book-num {
  width: 72px;
  text-align: center;
}

.book-category {
  width: 160px;
  text-align: center;
}

.book-title {
  width: 248px;
}

.book-price {
  width: 160px;
  padding-right: 10px;
  text-align: right;
}
</style>
