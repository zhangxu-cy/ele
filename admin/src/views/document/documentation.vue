<template>
  <div class="doc">
    <ul>
        <!-- <span>{{item.name}}</span> -->
        <router-link  v-for="(item, index) in DocList" :key="index" :to="item.path">{{item.name}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {  
      DocList: [
        {
          name: "国内文档",
          path: "www.baidu.com",
        },
        {
          name: "Documentation",
          path: "https://www.baidu.com/s?wd=%E7%89%A2%E7%89%A2%E6%8A%8A%E6%8F%A1%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95%E8%BF%99%E4%B8%AA%E9%A6%96%E8%A6%81%E4%BB%BB%E5%8A%A1&ie=utf-8&rsv_pq=d40d29fe000c727d&oq=router-link&rsv_t=ed8b4n%2BiwckYuQ3OTOtX%2F4qNxMVHeOmWbRGK19rN7ek8woWK9BsQ7NZpfSg&rqid=d40d29fe000c727d&rsf=d98080520e2b97b16ba1e3057a3e7310_1_15_1&rsv_dl=0_right_fyb_pchot_20811&sa=0_right_fyb_pchot_20811",
        },
      ],
    };
  },
};
</script>

<style scoped>
.doc ul li {
 
}
.doc{
  margin: 50px;
}
.doc ul a{
 float: left;
  font-size: 36px;
  color: #fff;
  padding: 20px;
  background-color: black;
  margin: 0 20px;
  text-decoration: none;
}
.doc {
  display: flex;
  justify-content: center;
}
</style>