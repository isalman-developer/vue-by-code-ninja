<template>
    <div :class="{dark : theme === 'dark'}">
        <h1>{{ title }}</h1>
        <p>{{ body }}</p>

        <button @click.right="closeDiv">Close this div with the right click of mouse</button>
    </div>
</template>

<script>
export default {
    props: ["title", "body", "theme"],

    methods : {
        closeDiv(){
            this.$emit("close");
        }
    }
}
</script>

<style>
.dark{
    background-color: black;
    color: white;
}

</style>