<template>
    <div id="postsDiv">
        <div id="topDiv">
            <h4>Posts Listing using async and await</h4>
            <router-link :to="{ name: 'postAddAsyncAwait' }">Add Post</router-link>
        </div>

        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">

            <div class="postDiv">
                <div class="post" v-for="post in posts" :key="post.id">
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
import getPosts from "../../../composables/getPosts";
import Spinner from "@/components/Spinner.vue";
import SinglePost from "./SinglePost.vue";
import TagsCloud from "./TagsCloud.vue";

export default {
    components: { Spinner, SinglePost, TagsCloud },
    setup() {
        // extracting these values from getPosts composable.
        const { posts, error, loadPosts } = getPosts();
        // run loadPosts function to get posts and error, bcox these values are set inside loadPosts function and returned.
        loadPosts();
        // when loadPosts function ran, then we will get value in either posts or error.
        return { posts, error };
    },
};
</script>

<style scoped>
#postsDiv {
    width: 1200px;
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
