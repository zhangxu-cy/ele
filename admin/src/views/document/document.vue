<template>
  <div>
    <MyNav ref="MyNav" @Transfer="getUser"></MyNav>
    <Pack></Pack>
    <Bread :toChild="ChangDi"></Bread>
    <Element></Element>
    <History></History>
    <documentation></documentation>
  </div>
</template>
<script>
import documentation from './documentation.vue'
export default {
  components:{documentation},
  data() {
    return {
      ChangDi: "",
    };
  },
  methods: {
    HandPacks() {
      this.$refs.MyNav.HandPack(); 
    },
    getUser(num) {
      // console.log('getUser执行');
      this.ChangDi = num;
    },
  },
  mounted() {
    // console.log(this.ChangDi);
  },
};
</script>

<style scoped>
.fl {
  float: left;
}
.fr {
  float: right;
}
section {
  position: fixed;
  right: 20%;
  top: 20px;
}
</style>