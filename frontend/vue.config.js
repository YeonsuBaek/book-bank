module.exports = {
  devServer: {
    proxy: {
      "/v1": {
        // /api가 아닌 API요청 도메인의 바로 다음 녀석인 /v1으로 url을 검사함
        target: "https://openapi.naver.com/",
        changeOrigin: true,
      },
    },
  },
};
