<template>
    <nav class="filter-nav">
        <button @click="filterEmit('all')" :class="{ active: filterProp == 'all' }">
            All
        </button>
        <button @click="filterEmit('completed')" :class="{ active: filterProp == 'completed' }">
            Completed
        </button>
        <button @click="filterEmit('ongoing')" :class="{ active: filterProp == 'ongoing' }">
            Ongoing
        </button>
    </nav>
</template>

<script>
export default {
    props: ['filterProp'],
    methods: {
        filterEmit(filterValue) {
            this.$emit('filterValueEmit', filterValue)
        }
    },
}
</script>

<style>
.filter-nav{
    text-align: center;
}

.filter-nav button {
    background: none;
    border: none;
    color: #bbb;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;

}

.filter-nav button.active {
    color: #555;
}
</style>