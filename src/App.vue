<template>
<div>
  <h1>Hello App!</h1>
  <p>
    <a v-link="{ path: '/foo' }">Foo</a>
    <a v-link="{ path: '/bar/1' }">Bar1</a>
    <a v-link="{ path: '/bar/2' }">Bar2</a>
    <a v-link="{ path: '/bar/3' }">Bar3</a>
  </p>
  <router-view keep-alive></router-view>
</div>
</template>

<script>
</script>

<style>
.v-link-active {
    color: red;
}
</style>
