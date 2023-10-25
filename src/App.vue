<template>
  <button @click.alt="toggleModal" v-if="!showModal">{{ message }}</button>

  <div v-if="showModal">
    <TestComponent :title="title" :body="bodyText" :theme="themeValue" @close="toggleModal" />
  </div>

  <p><br></p>
  <input type="text" ref="nameInput"> <br>
  <button @click="logInput" style="margin-top: 10px;">logInput</button>
</template>

<script>
import TestComponent from './components/ChildComponent.vue';

export default {
  name: 'App',
  components: { TestComponent },
  data() {
    return {
      message: "Show Div while alt + mouse click",
      title: "Welcome to vue",
      bodyText: "This div acheives the functionality of the click event modifier.",
      themeValue: "dark",
      showModal: false
    }
  },

  methods: {
    logInput() {
      console.log(this.$refs.nameInput.value);
      this.$refs.nameInput.classList.add('active');
    },

    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
