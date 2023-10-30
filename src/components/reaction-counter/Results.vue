<template>
    <p>Your score is {{ score }}</p>
    <p class="rank">{{ rank }}</p>
</template>

<script>
export default {

    props: ['score'],
    data() {
        return {
            rank: null,
        }
    },

    mounted() {
        if (this.score < 250) {
            this.rank = "Ninja Fingers";
        } else if (this.score < 400) {
            this.rank = "Rapid Flexes";
        } else {
            this.rank = "Snail Pace";
        }
    }
}
</script>

<style>
.rank{
    font-size: 1.4em;
    color: rgb(49, 221, 221);
    font-weight: bold;
    }
</style>