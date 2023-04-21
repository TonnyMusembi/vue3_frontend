import { createRouter, createWebHistory } from "vue-router";

import { useAuthStore } from "../stores/login";
import { storeToRefs } from "pinia";

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
                meta: { title: "Dashboard", requiresAuth: true },
            },

            {
                path: "task",
                name: "task",
                component: Task,
                meta: { title: "Task", requiresAuth: true },
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () =>
            import ("@/views/NotFound.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const { user } = storeToRefs(useAuthStore());
    const notAuthenticated = user.value == null;
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

    if (requiresAuth && notAuthenticated) next("/");
    else next();
});
export default router;