<template>

    <div>
        <button @click="back()">Back</button>
        <button @click="forward()">Forward</button>
        <button @click="redirect()">Redirect</button>
    </div>

    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
        <router-link :to="{ name: 'job-details', params: { id: job.id } }">
            <h2>{{ job.title }}</h2> 
        </router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            jobs: [
                { id: 1, title: "Ui/UX Designer" },
                { id: 2, title: "Vue Developer" },
                { id: 3, title: "Node Developer" },
            ]
        }
    },
    methods: {
        back(){
            this.$router.go(-1);
        },
        forward(){
            this.$router.go(1);
        },
        redirect(){
            this.$router.push({ name:'home' });
        }
    },
}

</script>