<template>
  <div>

    <h1>Reaction Counter</h1>
    <button @click="start" :disabled="isPlaying">Play</button>
    
    <Block v-if="isPlaying" :delay="delay" @end="endGame"></Block>
    
    <Results v-if="showResults" :score="score"></Results>

    <Signup />
  </div>
</template>

<script>
import Signup from "./components/form-inputs/Signup.vue";
import Block from "./components/reaction-counter/Block.vue";
import Results from "./components/reaction-counter/Results.vue";


export default {
  components: { Block, Results, Signup },
  name,
    Signup: "App",
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    };
  },

  methods: {
    start() {
      this.isPlaying = true;
      this.showResults = false;
      this.delay = 2000 + Math.random() * 5000;
    },

    endGame(incomingScore) {
      this.score = incomingScore;
      this.isPlaying = false;
      this.showResults = true;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
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
