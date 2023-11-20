<template>
    <div style="text-align: center;">
        <button @click="toogle = !toogle">Toggle - Un Mounted</button>
        <NamesList v-if="toogle" :names="names" />
        <button @click="names.pop()">Pop - Updated</button>
    </div>
</template>

<script>
import { ref } from 'vue';
import NamesList from "../composition-api/props-components/NameList.vue";
export default {
    components: { NamesList },
    setup() {
        const names = ref([
            {
                name: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
                age: "15",
            },
            {
                name: "Use the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.",
                age: "5",
            },
            {
                name: "Lorem ipsum means nothing, it is a set of Latin words that make up a text of fake filling, random, placeholder. Use the online text generator.",
                age: "5",
            }
        ]);

        const toogle = ref(true);
        return { names, toogle };
    },
};
</script>
