<template>
    <div>
        <p>{{ name.age }}</p>
        <p>{{ returnName }}</p>
    </div>
</template>

<script>
export default {
    props: ['name'],
    computed: {
        returnName() {
            return this.name.name.substr(0, 50) + '.....';
        }
    }
}
</script>
