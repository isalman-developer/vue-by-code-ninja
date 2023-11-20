<template>
    <div id="nameDiv">
        <h2>Names</h2>
        <div v-for="name in names" :key="name.id">
            <SingleName :name="name" />
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import SingleName from './SingleName.vue';
export default {
    props: ['names'],
    components: { SingleName },
    setup(props) {
        const names = props.names;

        onMounted(() => {
            console.log("mounted");
        });

        onUnmounted(() => {
            console.log("unmounted on toggle");
        });

        onUpdated(() => {
            console.log("updated on pop");
        });


        return { names };
    }
}
</script>
<style>
#nameDiv {
    width: 800px;
    margin: auto;
    text-align: center;
}
</style>