<template>
  <div>
    <el-row>
      <el-col id="tac" class="tac" :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#304156"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title" @click="SetUser">Dashboard</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title"  @click="SetUser">Documentation</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title" @click="SetUser">Guide</span>
          </el-menu-item>
        </el-menu>z
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mwidth: true,
      Mynumber: "",
    };
  },
  methods: {
    HandPack() {
      let tac = document.getElementById("tac");
      this.mwidth = !this.mwidth;
      if (this.mwidth == true) {
        tac.className = "width50 el-col el-col-12";
      } else {
        tac.className = "width210 el-col el-col-12";
      }
    },
    // 父传子
    SetUser() {
      // console.log('SetUser执行了');
      this.$emit("Transfer", this.Mynumber);
    },
  },
  mounted() {
    let lb = document
      .getElementById("tac")
      .getElementsByClassName("el-menu-item");
    var cy = this;
    for (let i = 0; i < lb.length; i++) {
      lb[i].onclick = function () {
        cy.Mynumber = this.querySelector("span").innerHTML;
      };
    }
  },
};
</script>

<style scoped>
.el-row {
  float: left;
}
.tac {
  height: 700px;
}
.el-col {
  width: 210px;
  height: 700px;
  overflow: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 8px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  background: #304156;
  border-radius: 4px;
  height: 50px;
}
.width50 {
  height: 700px;
  width: 50px;
}
.width210 {
  height: 700px;
  width: 210px;
}
</style>