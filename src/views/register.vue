<script setup>
import { useCreateUserStore } from "../stores/register";

import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const router = useRouter();
const { createUser } = useCreateUserStore();

const {  responseOK } = storeToRefs(
    useCreateUserStore()
);
const email_adress = ref();
const password = ref();


const register = async () => {
    const body = {
        email_adress: email_adress.value,
        password: password.value,
    };
    await createUser(body);
    if (responseOK.value) {
        router.push("/");
    }
};

</script>
<template>
    <div class=" grid h-screen place-items-center">
        <form @submit.prevent="register" class="w-full max-w-sm">
            <div class="mb-6">
                <label for="username" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                <input type="text" placeholder="user@xyz.com" name="email_adress" id="email_adress"
                    class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"
                    required v-model="email_adress" />
            </div>
            <div class="mb-6">
                <label for="password" class="block text-sm font-semibold leading-6 text-gray-900">Password</label><input
                    type="password" name="password" placeholder="XXXXXXX" id="password"
                    class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"
                    aria-required required v-model="password" minlength="6" />
            </div>
            <!-- <p class="text-red-500 mb-6 text-sm">{{ error }}</p> -->
            <button type="submit"
                class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-blue-500 hover:text-sky-50/80 hover:bg-teal-500 w-full">
                <!-- <Spin v-if="pending" /> -->
                <span>Login</span>
            </button>
            <p class="mt-6 text-center">
                <a href="/" class="text-sm hover:underline">login?</a>
            </p>
        </form>
    </div>
</template>
