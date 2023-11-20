<template>
    <div id="home">
        <input type="text" v-model="search">
        <p>Search term -- {{ search }}</p>
        <div v-for="name in searchedNames" :key="name">{{ name }}</div>
    </div>
</template>
<script>
import { computed, ref } from 'vue'
export default {
    setup() {
        const names = ref(['arif', 'ayyan', 'azan', 'talha', 'ahmad', 'zain', 'shuraim', 'shahid']);
        const search = ref('');

        const searchedNames = computed(() => {
            return names.value.filter(name => {
                return name.includes(search.value)
            })
        });
        return {
            names,
            search,
            searchedNames
        }
    }
}

</script>
<style>
#home {
    text-align: center;
}
</style>