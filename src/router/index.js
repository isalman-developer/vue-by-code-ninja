import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
const routes = [
    {
        path:'/',
        name:'home',
        component: Home,
    },{
        path:'/reaction-counter',
        name:'reaction-counter',
        component: () => import('../views/reaction-counter/ReactionCounter.vue') //this is called lazy loading component
    },{
        path:'/signup-form',
        name:'signup-Form',
        component: () => import('../views/signup-form/SingupForm.vue'),  
    },{
        path:'/jobs',
        name:'jobs',
        component: () => import('../views/jobs/Jobs.vue'),
    },{
        path:'/job/:id',
        name:'job-details',
        component: ()=> import('../views/jobs/JobDetail'),
    },
    // redirect route
    {
        path:'/all-jobs',
        redirect:'jobs' 
    },
    {
        path:'/projects',
        name:'projects',
        component:()=> import('../views/project-planners/Projects.vue'),
    },
    {
        path:'/add-project',
        name:'addProject',
        component:()=> import('../components/project-planners/AddProject.vue'),
    },
    {
        path:'/edit-project/:id',
        name:'EditProject',
        component:()=> import('../components/project-planners/EditProject.vue'),
        props:true,
    },
    // 404 route
    {
        path:'/:catchAll(.*)',
        component: () => import('../components/404/NotFound.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router