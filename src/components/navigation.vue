<script setup>
import { useAuthStore } from "../stores/login";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const router = useRouter();

const { user } = storeToRefs(useAuthStore());
const { logout } = useAuthStore();

const logoutUser = () => {
    logout();
    router.push("/");
};

</script>
<template>
    <div class="w-full p-3">
        <img src="../assets/vue.svg" />
    </div>
    <div class="fixed w-64 left-0 top-0 bottom-0 border-r bg-black">

        <ol class="mt-8 w-full text-sm font-gotham">
            <li class="text-white text-opacity-75 mb-2 border-l-4 rounded-lg border-blue-500 border-opacity-0" :class="{
                'bg-white bg-opacity-10 border-opacity-100 text-opacity-100 font-medium':
                    $route.name == 'dashboard',
            }">

                <router-link :to="{ name: 'dashboard' }" class="px-6 py-2 block">Dashboard</router-link>
            </li>
            <li class="text-white text-opacity-75 mb-2 border-l-4 rounded-lg  border-blue-500 border-opacity-0" :class="{
                'bg-white bg-opacity-10 border-opacity-100 text-opacity-100 font-medium':
                    $route.name == '',
            }">

                <router-link :to="{ name: '' }" class="px-6 py-2 block">Admin</router-link>
            </li>
            <li>
                <a href="/"
                    class="flex items-center p-2 text-base font-normal text-gray-400 rounded-lg  hover:bg-gray-100 ">
                    <svg aria-hidden="true"
                        class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 "
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span class="ml-3">Companies</span>
                </a>
            </li>
            <li>
                <a href="" class="flex items-center p-2 text-base font-normal text-gray-400 rounded-lg  hover:bg-gray-100 ">
                    <svg aria-hidden="true"
                        class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 "
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span class="ml-3">Branches</span>
                </a>
            </li>
            <li>
                <a href="" class="flex items-center p-2 text-base font-normal  rounded-lg text-gray-400 hover:bg-gray-100 ">
                    <svg aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
                        </path>
                        <path
                            d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
                        </path>
                    </svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Roles</span>
                    <span
                        class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                </a>
            </li>

            <li class="absolute bottom-6 text-white left-0">
                <button @click="logoutUser"
                    class="flex items-center p-2 text-base font-normal  rounded-lg text-gray-400 hover:bg-gray-100 ">
                    Logout
                </button>
            </li>
        </ol>
    </div>
</template>
