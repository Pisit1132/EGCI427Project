<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/events">Events</router-link>
    <router-link to="/signup">Sign-up</router-link>
    <router-link to="/login">Login</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #000;
}

a {
  color: #fff;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
}

a:hover {
  background-color: #333;
}
</style>
