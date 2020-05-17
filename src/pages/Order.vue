<template>
  <div>
    home
    <order-header></order-header>
    <router-view />
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import OrderHeader from "./../components/OrderHeader";
import NavFooter from "./../components/NavFooter";
export default {
  name: "home",
  components: { OrderHeader, NavFooter }
};
</script>
<style scoped>
</style>