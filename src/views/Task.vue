<script setup>
// import { useUsersStore } from "../stores/users";
// import { storeToRefs } from "pinia";

// const { users} = storeToRefs(useUsersStore());

// const { fetchUsers } = useUsersStore();
// fetchUsers();
// console.log(users)

import axios from 'axios';
import { ref } from "vue"


const fetchData = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/tasks');
    return response.data;
    console.log(response)
};

const tasks = ref([]);

const fetchTasks = async () => {
    const data = await fetchData();
    tasks.value = data;
};

fetchTasks();

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [day, month, year].join('-');
}

</script>
<template>
    <div>
        User Task
    </div>
    <div class="shadow-lg overflow-scroll border-b border-gray-200 sm:rounded-md">
        <div class="overflow-auto h-[37rem] relative shadow-md sm:rounded-sm">
            <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-gray-700  bg-gray-200">
                    <tr class="divide-x divide-gray-300">
                        <th scope="col" class="py-1"></th>
                        <th scope="col" class="py-1">User name</th>
                        <th scope="col" class="py-1">Description</th>
                        <th scope="col" class="py-1">CreatedAt</th>
                        <th scope="col" class="py-1">status Id</th>
                        <th scope="col" class="py-1">Edit</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="task in tasks['data']" :key="task" :class="{ 'bg-gray-50': index % 2 === 1 }"
                        class="bg-white border-b divide-x hover:bg-teal-100 cursor-pointer">
                        <th scope="row" class="py-1 font-medium text-gray-900 whitespace-nowrap">
                            {{ task.id }}
                        </th>
                        <td class="py-1">{{ task.name }}</td>
                        <td class="py-1">{{ task.description }}</td>
                        <td class="py-1  bg-teal-100 rounded-full"><label v-if="task.status_id === 3">
                                NOT ACTIVE
                            </label>

                            <label v-if="task.status_id === 1">
                                Active
                            </label>
                            <label v-else>
                                No Status </label>
                        </td>
                        <td class="py-1">{{ formatDate(task.created_at) }}</td>
                        <td class="py-1 text-teal-500 hover:underline">edit</td>


                    </tr>
                </tbody>
            </table>


        </div>
    </div>
</template>
