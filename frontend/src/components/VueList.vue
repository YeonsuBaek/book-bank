<template>
  <section class="booklist">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="subTitle">
            <h2>이만큼 읽었어요!</h2>
            <strong>100,000원</strong>
          </div>

          <div class="booklistHeader">
            <span class="bookNumber">No.</span>
            <span class="bookTitle">제목</span>
            <span class="bookCategory">분야</span>
            <span class="bookPrice">가격</span>
          </div>

          <ul class="booklistList">
            <li class="booklistItem">
              <span class="bookNumber">1</span>
              <span class="bookTitle">Operating System Concepts</span>
              <span class="bookCategory">IT/컴퓨터</span>
              <span class="bookPrice">45,000원</span>
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
