import { defineStore } from "pinia";
import axios from "axios";
export const useUsersStore = defineStore("users-store", {
    state: () => ({
        pending: false,
        error: "",
        responseOK: false,
        results: null,
        users: null,
    }),

    actions: {
        async fetchUsers() {
            try {
                this.pending = true;
                this.responseOK = false;
                this.error = "";
                const { response } = await axios.get(
                    "http://127.0.0.1:8000/api/users"
                );
                this.pending = false;
                this.users = response.data;
                this.error = "";
            } catch (error) {
                this.pending = false;
                console.log(error);
                // if (error ? .response ? .status === 400) {
                //     this.error = "There was an error";
                // }
            }
        },
    },
});