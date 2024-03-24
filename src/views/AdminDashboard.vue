<template>
  <!-- You are currently on the admin page -->
  <div>
    <h1>你現在在後台頁面</h1>
    <div id="nav">
      <RouterLink to="/">回到前台</RouterLink> |
      <RouterLink to="/admin/products">後台產品列表</RouterLink> |
      <RouterLink to="/admin/orders">後台訂單</RouterLink> |
      <a href="#" @click.prevent="signout">登出</a>
    </div>
    <RouterView v-if="checkSuccess" />
  </div>
</template>

<script>
// Authentication logic can be written here
export default {
  data() {
    return {
      checkSuccess: false,
    };
  },
  mounted() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)yanaToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      if (token) {
        // Axios default configuration
        this.$http.defaults.headers.common.Authorization = `${token}`;
        const api = `${import.meta.env.VITE_API}api/user/check`;
        this.$http
          .post(api, { api_token: this.token })
          .then(() => {
            this.checkSuccess = true;
          })
          .catch((err) => {
            alert(err.response.data.message);
            this.$router.push("/login");
          });
      } else {
        alert("您尚未登入。");
        this.$router.push("/login");
      }
    },
    signout() {
      document.cookie = "yanaToken=;expires=;";
      alert("token 已清除");
      this.$router.push("/login");
    },
  },
};
</script>