
<script setup>
import Spin from "../components/Spin.vue";
import { ref } from "vue";


import { useAuthStore } from "../stores/login";
import { storeToRefs } from "pinia";

import { useRouter } from "vue-router"
const router = useRouter();

// const test = ref();
// const user = ref();

const { login: loginUser } = useAuthStore();
const {  error,pending, responseOK } = storeToRefs(useAuthStore());

const email_adress = ref();
const password = ref();

const login = async () => {
    const body = {
        email_adress: email_adress.value,
        password: password.value,
    };
    await loginUser(body);
    if (responseOK.value) {
        router.push("/dashboard");
    }
};

</script>

<template>
 
    <div class=" grid h-screen place-items-center">
        <form @submit.prevent="login" class="w-full max-w-sm">
            <div class="mb-6">
                <label for="username" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                <input type="email" placeholder="user@xyz.com" name="email_adress" id="email_adress"
                    class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"
                    required v-model="email_adress" />
            </div>
            <div class="mb-6">
                <label for="password" class="block text-sm font-semibold leading-6 text-gray-900">Password</label><input
                    type="password" name="password" placeholder="XXXXXXX" id="password"
                    class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"
                    aria-required required v-model="password" minlength="6" />
            </div>
            <p class="text-red-500 mb-6 text-sm">{{ error }}</p>
            <button type="submit"
                class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-blue-700 hover:text-sky-50/80 hover:bg-blue-500 w-full">
                <Spin v-if="pending" />
                <span v-else >Login</span>
            </button>
            <p class="mt-6 text-center">
                <a href="register" class="text-sm hover:underline">Register?</a>
            </p>
        </form>
    </div>
</template>
