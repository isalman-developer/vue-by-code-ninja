<template>
    <div class="project" :class="{ complete: project.complete }">
        <div class="actions">
            <h2 @click="toggleDetails">{{ project.title }}</h2>
            <div class="icons">
                <router-link :to="{ name: 'editProject', params: { id: project.id } }">
                    <span class="material-icons">edit</span>
                </router-link>
                <span class="material-icons" @click="deleteProject">delete</span>
                <span class="material-icons tick" @click="completeProject">done</span>
            </div>
        </div>
        <div class="details" v-if="showDetails">
            <p>{{ project.details }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['project'],
    data() {
        return {
            showDetails: false,
            uri: 'http://localhost:3000/projects/' + this.project.id,
        }
    },

    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails;
        },

        deleteProject() {
            fetch(this.uri, { method: 'DELETE' })
                .then(() => this.$emit('singleProjectDeleteEmit', this.project.id))
                .catch((error) => console.log(error))
        },

        completeProject() {
            fetch(this.uri, {
                method: 'PATCH',
                headers: { "Content-type": "application/json" },
                /*
                 content-type mean to tell the server that we are sending the json type of data
                 we can either send json or form data in fetch and no other data type like json object, here project is an object 
                */
                body: JSON.stringify({ complete: !this.project.complete })
            })
                .then(this.$emit("singleProjectCompleteEmit", this.project.id))
                .catch(error => console.log(error))
        }
    }
}
</script>

<style>
.project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
    border-left: 4px solid #e90074;
    text-align: left;
}

h3 {
    cursor: pointer;
}

.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
}

.material-icons:hover {
    color: #777;
}

.project.complete {
    border-left: 4px solid #00ce89;
}

.project.complete .tick {
    color: #00ce89;
}
</style>