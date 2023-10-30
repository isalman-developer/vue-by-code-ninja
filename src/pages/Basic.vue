<template>
    <button @click.alt="toggleModal" v-if="!showModal">{{ message }}</button>
  
    <div v-if="showModal">
      <TestComponent :title="title" :body="bodyText" :theme="themeValue" @close="toggleModal">
        we can use multiple slots to pass data. and by default data defined between component closing and opening tag is
        passed to a slot without name default slot.
        <template #namedSlot>
          This is names slot. so we can pass data to default slots as well as specific slots accessed by name and we can
          also pass props, pass data slots and named slots.
        </template>
      </TestComponent>
    </div>
    <br>
  
    <teleport to="#teleportDiv">
      <input type="text" ref="nameInput"> <br>
      <button @click="logInput" style="margin-top: 10px;">logInput</button>
      <p>This is rendered outside of #div in index.html because of teleport</p>
    </teleport>
  
  
    <br>
    <button @click="popUpToogle">open modal</button>
    <Modal v-if="popUp" :theme="'sale'" @close="popUpToogle">
      Welcome to vue
      <template #links>
        <button>Login</button>
        <button>Sign in</button>
      </template>
    </Modal>
  </template>
  
  <script>
  import TestComponent from './components/ChildComponent.vue';
  import Modal from './components/Modal.vue';
  
  
  export default {
    name: 'App',
    components: { TestComponent, Modal },
    data() {
      return {
        message: "Show Div while alt + mouse click",
        title: "Welcome to vue",
        bodyText: "This div acheives the functionality of the click event modifier.",
        themeValue: "dark",
        showModal: false,
        popUp: false
      }
    },
  
    methods: {
      logInput() {
        console.log(this.$refs.nameInput.value);
        this.$refs.nameInput.classList.add('active');
      },
  
      toggleModal() {
        this.showModal = !this.showModal;
      },
  
      popUpToogle() {
        this.popUp = !this.popUp;
      }
    }
  }
  </script>
  
  <style>
  #app,
  #modals {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  h1 {
    border-bottom: 1px solid #ddd;
    display: inline-block;
    padding-bottom: 10px;
  }
  
  button {
    background: #bbb;
    padding: 10px;
    border: none;
    border-radius: 4px;
    margin: 10px;
    font-size: 16px;
    color: #333;
  }
  </style>
  