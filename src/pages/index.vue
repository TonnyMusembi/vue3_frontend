<template>
    <div class="absolute w-full h-full left-0 top-0">
        <Navigation />
        <div class="absolute left-64 right-0 top-0 bottom-0" :class="{ 'bg-gray-50': $route.name == 'dashboard' }">
            <div class="border-b px-6 py-4 sticky top-0 bg-white z-10">
                <div class="text-xl">{{ $route.meta.title }}</div>
            </div>
            <RouterView />
        </div>
    </div>
</template>

<script type="text/javascript">
import Navigation from '@/components/navigation.vue';

export default {
    components: { Navigation }
}
</script>