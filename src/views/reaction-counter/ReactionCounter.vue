<template>
  <div id="textCenter">
    <h1>Reaction Counter</h1>
    <button @click="start" :disabled="isPlaying">Play</button>
    <Block v-if="isPlaying" :delay="delay" @end="endGame"></Block>
    <Results v-if="showResults" :score="score"></Results>
  </div>
</template>

<script>
import Block from "../../components/reaction-counter/Block.vue";
import Results from "../../components/reaction-counter/Results.vue";
export default {
  components: { Block, Results },
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