<template>
    <div id="textCenter">
        <RouterHistoryButton />
        <h1>Job Details</h1>

        <div v-if="job">
            <p>ID : {{ job.id }}</p>
            <p>Title : {{ job.title }}</p>
            <p>Detail : {{ job.details }}</p>
        </div>
        <div v-else>
            <p>Job is loading.....</p>
        </div>
    </div>
</template>
<script>
import RouterHistoryButton from './RouterHistoryButton.vue';
export default {
    components: { RouterHistoryButton },
    data() {
        return {
            id: this.$route.params.id,
            job: null,
        }
    },

    mounted() {
        fetch('http://localhost:3000/blogs/' + this.id)
            .then(response => response.json())
            .then(data => this.job = data);
    }

}

</script>