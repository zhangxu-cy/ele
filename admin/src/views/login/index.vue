<template>
  <div class="login_contain">
    <div class="login">
      <h3>Login Form</h3>
      <el-input
        placeholder="请输入账号"
        suffix-icon="el-icon-date"
        v-model="Username"
      >
      </el-input>
      <el-input
        placeholder="请输入密码"
        suffix-icon="el-icon-date"
        v-model="Password"
      >
      </el-input>
      <el-button class="btn_login" type="primary" @click="HanderLogin">
        Login
      </el-button>
      <div class="ts">
        <p>Username : admin</p>
        <p>Password : 123456</p>
      </div>
      <div class="connnecr">
        <el-button type="primary">Or connect with</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Username: "",
      Password: "",
      TrueUsername: "admin",
      TruePassword: "123456",
    };
  },
  methods: {
    HanderLogin() {
      if (this.Username == this.TrueUsername && this.Password == this.TruePassword) {
        this.$router.push({ path: "/dashboard" });
      } else {
        alert("账号密码错误");
      }
    },
  },
};
</script>

<style scoped>
* {
  color: #ffffff;
}
.login_contain {
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
}
.login {
  width: 500px;
  height: 350px;
  margin: 180px auto;
}
.login h3 {
  text-align: center;
  font-size: 24px;
  padding: 20px 0;
  font-weight: bold;
  color: #ffffff;
}
.el-input {
  margin-top: 20px;
}
.btn_login {
  width: 100%;
  margin-top: 20px;
}
.ts {
  float: left;
  margin: 30px 0 0 20px;
}
.connnecr {
  float: right;
  margin: 30px 20px 0 0;
}
</style>