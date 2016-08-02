<template>
<div>
  <ul>
	  <li><a v-link="{ path: '/home' }">首页</a></li>
	  <li><a v-link="{ path: '/login' }">登录</a></li>
	  <li><a v-link="{ path: '/api' }">api</a></li>
  </ul>
  <router-view keep-alive></router-view>
</div>
</template>

<script>
</script>

<style>
.v-link-active {
    color: red;
}
ul{
	list-style: none;
}
ul > li {
    display: inline-block;
}
</style>
