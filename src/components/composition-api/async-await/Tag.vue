<template>
    <div id="postsDiv">
        <div id="topDiv">
            <h4>Posts Listing using async and await</h4>
            <router-link :to="{ name: 'postAddAsyncAwait' }">Add Post</router-link>
        </div>

        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
            
            <div class="postDiv">
                <div class="post" v-for="post in taggedPosts" :key="post.id">
                    <SinglePost :post="post" />
                    <hr />
                </div>
            </div>

            <div class="tags-cloud">
                <TagsCloud :posts="posts" />
            </div>

            <div class="clearfix"></div>
        </div>
        <Spinner v-else />
    </div>
</template>
<script>
import getPosts from '@/composables/getPosts';

import TagsCloud from "./TagsCloud.vue";
import SinglePost from './SinglePost.vue';
import Spinner from '@/components/Spinner.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
    components: { Spinner, SinglePost, TagsCloud },
    setup() {
        const route = useRoute();
        const { posts, error, loadPosts } = getPosts();
        loadPosts();

        const taggedPosts = computed(() => {
            return posts.value.filter((post) => {
                return post.tags.includes(route.params.tag)
            })
        });

        return { posts, error, taggedPosts }
    }

}
</script>
<style scoped>
#postsDiv {
    width: 800px;
    margin: auto;
    text-align: center;
}

#topDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: auto;
}

h4 {
    border-bottom: 1px solid silver;
    padding-bottom: 5px;
}

.post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
}

.postDiv {
    width: 70%;
    float: left;
}

.tags-cloud {
    width: 30%;
    float: left;
}

.clearfix::after {
    content: "";
    clear: both;
    display: table;
}
</style>
