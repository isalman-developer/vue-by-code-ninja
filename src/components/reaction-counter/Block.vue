<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        Stop Game !!
    </div>
</template>

<script>
export default {
    props: ["delay"],
    data() {
        return {
            showBlock: false,
            timer: null, //using this to start logging and then disable logging
            reactionTime: 0, //using this to store the total time taken to click
        }
    },

    mounted() {
        setTimeout(() => {
            this.showBlock = true;
            this.startTimer();
        }, this.delay);
    },

    methods: {
        startTimer() {
             this.timer = setInterval(() => {
                this.reactionTime += 10;
             }, 10);
        },
        stopTimer() {
            clearInterval(this.timer);
            this.$emit("end", this.reactionTime);
        }
    }
}

</script>
<style>
.block {
    width: 400px;
    border-radius: 20px;
    background: #0faf87;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}
</style>