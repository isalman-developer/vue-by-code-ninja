<template>
    <Navbar />
    <FilterNavbar @filterValueEmit="defaultFilter = $event" :filterProp="defaultFilter" />
    <div id="home">
        <div v-if="projects.length">
            <div v-for="project in filteredProjects" :key="project.id">
                <SginleProject :project="project" @singleProjectDeleteEmit="deleteProject"
                    @singleProjectCompleteEmit="completeProject" />
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../../components/project-planners/Navbar.vue';
import FilterNavbar from '../../components/project-planners/FilterNavbar.vue';
import SginleProject from '../../components/project-planners/SingleProject.vue';
export default {
    name: "Project Planner Home",
    components: { SginleProject, Navbar, FilterNavbar },
    data() {
        return {
            projects: [],
            defaultFilter: 'all'
        }
    },

    mounted() {
        fetch('http://localhost:3000/projects')
            .then(respon => respon.json())
            .then(data => {
                return this.projects = data;
            })
            .catch(error => console.log(error));
    },

    methods: {
        deleteProject(projectId) {
            this.projects = this.projects.filter((project) => {
                return project.id !== projectId;
            })
        },
        completeProject(projectId) {
            let p = this.projects.find(project => project.id == projectId)
            p.complete = !p.complete;
        },
    },

    computed: {
        filteredProjects() {
            if (this.defaultFilter == 'completed') {
                // return this.projects.filter(project => project.complete);
                return this.projects.filter(project => project.complete == true);
            } 
            if (this.defaultFilter == 'ongoing') {
                return this.projects.filter(project => !project.complete);
            } 
            return this.projects;

        }
    }
}
</script>

<style scoped>
body {
    background: #f2f2f2;
}

#home {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 600px;
    margin: 0 auto;
    color: #555;
}
</style>