<template>
    <h1>Job Detials</h1>
    <p>The Job ID is {{ id }}</p>
</template>
<script>
export default {

    data() {
        return {
            id: this.$route.params.id,
        }
    }

}

</script>