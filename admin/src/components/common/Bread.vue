<template>
<div class="bread">
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">{{toChild}}</a></el-breadcrumb-item>
  </el-breadcrumb>
  </div>
</template>

<script>
export default {
  // props:[toChild],
  // props: {
  //   toChild,
  // },
  //  props:['toChild'],
  props:{
    toChild:String
  },
  data() {
    return {
      brealist: [],
      Bread_title: "",
    };
  },
  mounted() {
    // console.log(this.$route);
  },
  // watch: {
  //   $route: {
  //     handler(route) {
  //       let List = route.matched;
  //       console.log(List);
  //       List.forEach((item) => {
  //         this.breadlitst.push(item.meta.title);
  //       });
  //     },
  //   },
  // },
};
</script>

<style scoped>
.bread{
  display: inline-block;
  font-size: 24px;
  margin: 20px;
}
</style>