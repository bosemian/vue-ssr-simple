<template>
  <div id="app">
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-center is-centered">
          <a class="nav-item">
            <h1 class="title">VUE-SSR</h1>
          </a>
        </div>
        <div class="nav-right nav-menu">
          <router-link to="/" class="nav-item">
            Home
          </router-link>
        </div>
        <router-link to="/about" class="nav-item">
            About
        </router-link>
      </div>
    </nav>
    <div class="container">
      <br>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
