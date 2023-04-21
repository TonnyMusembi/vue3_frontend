<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const handleError = () => {
  console.log("go home");
  router.push("/");
};
</script>
<template>
  <div class="container max-w-sm mx-auto text-center ">
    <p class="mt-7 text-7xl font-bold">404</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7">Not Found</p>
    <button class="bg-teal-600 rounded-md" @click="handleError">
      Go Home...
    </button>
  </div>
</template>
