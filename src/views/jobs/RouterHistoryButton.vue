<template>
    <div>
        <button @click="back()">Back</button>
        <button @click="forward()">Forward</button>
        <button @click="redirect()">Redirect</button>
    </div>
</template>

<script>
export default {
    methods: {
        back() {
            this.$router.go(-1);
        },
        forward() {
            this.$router.go(1);
        },
        redirect() {
            this.$router.push({ name: 'home' });
        }
    },
}
</script>