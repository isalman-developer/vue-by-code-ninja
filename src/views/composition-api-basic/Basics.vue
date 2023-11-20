<template>
    <div class="text-center">
        <h2>Composition Api Basic</h2>
    </div>
    <div>
        <nav class="main-nav">
            <router-link :to="{ name: 'computedRoute' }">Ref & Computed</router-link>
            <router-link :to="{ name: 'propsRoute' }">Props (Names Listing)</router-link>
            <router-link :to="{ name: 'postsAsyncAwait' }">Async - Await (Posts)</router-link>
        </nav>
    </div>
    <hr>
    <router-view></router-view>
</template>
<script>
export default {

}
</script>
<style>
.main-nav {
    text-align: center;
    margin: 10px auto;
}
.text-center{
    text-align: center;
}
.main-nav a {
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    color: #999;
    font-size: 18px;
}

a.router-link-active {
    border-bottom: 2px solid #00ce89;
    padding-bottom: 4px;
}
</style>