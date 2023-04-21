import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/login.vue";
import Register from "@/views/register.vue";
import Task from "@/views/Task.vue";


import Dashboard from "@/views/Dashboard.vue";
import Nav from "@/views/Nav.vue";
// import IndexMain from "@/pages/index.vue";

const routes = [
    { path: "/", name: "login", component: Login },
    { path: "/register", name: "register", component: Register },

    {
        path: "/",
        component: Nav,
        children: [{
                path: "dashboard",
                name: "dashboard",
                component: Dashboard,
                meta: { title: "Dashboard" },
            },

            {
                path: "task",
                name: "task",
                component: Task,
                meta: { title: "Task" },
            },
        ],
    },
];
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});
export default router;