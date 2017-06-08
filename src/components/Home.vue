<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Home Component</strong> <small v-if="username">Hello {{ username }}</small>
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  created () {
    this.API.fetchCurrentUser()
  },
  computed: {
    username () {
      return this.store.currentUser && this.store.currentUser.username || ''
    }
  }
}
</script>
