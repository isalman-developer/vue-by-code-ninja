<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
        <span v-for="tag in post.tags" :key="tag.id">
            #{{ tag }}
        </span>
    </div>
    <Spinner v-else />
</template>
<script>
import { useRoute } from 'vue-router';
import getPost from '../../../composables/getPost';
import Spinner from '../../Spinner.vue';
export default {
    props: ['id'],
    components: { Spinner },
    setup(props) {
        const route = useRoute();
        const { post, error, loadPost } = getPost(route.params.id);
        // const { post, error, loadPost } = getPost(props.id);
        loadPost();
        return { post, error }
    }
}
</script>

<style>
.post {
    max-width: 1200px;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
}

.post p {
    color: #444;
    line-height: 1.5em;
}

.post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
}

.post h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
}
</style>