<template>
    <RouterHistoryButton />
    <h1>Jobs</h1>
    <div v-if="jobs">
        <div v-for="job in jobs" :key="job.id">
            <router-link :to="{ name: 'job-details', params: { id: job.id } }">
                <h2>{{ job.title }}</h2>
            </router-link>
        </div>
    </div>
    <div v-else>
        <p>
            Fetching Records, if record not found. Run json-serve --watch data/db.json
            or Check data in data/db.jsonx
        </p>
    </div>
</template>
<script>
import RouterHistoryButton from "./RouterHistoryButton.vue";
export default {
    components: { RouterHistoryButton },
    data() {
        return {
            jobs: [],
        };
    },

    mounted() {
        fetch("http://localhost:3000/blogs")
            .then(function (res) {
                //short syntax is .then(res => res.json())
                return res.json();
            })
            .then((data) => (this.jobs = data));
    },
};
</script>
