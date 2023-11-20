<template>
  <div class="home-button">
    <router-link :to="'/'">Home</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444;
  margin-top: 10px;
}

#textCenter{
  text-align: center;
}

.home-button {
  display: flex;
}

.home-button a {
  display: block;
  margin-left: auto;
  margin-right: 10px;
}

h1 {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

body {
  margin: 0;
  background: #eee;
}

button {
  background: #7576db;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  margin: 10px;
  letter-spacing: 1px;
  cursor: pointer;
}

button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
