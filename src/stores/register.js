import { defineStore } from "pinia";
import axios from "axios";
// import API from "../services/API";
export const useCreateUserStore = defineStore("create-user-store", {
    state: () => ({
        pending: false,
        error: "",
        user: null,
        responseOK: false,
    }),

    actions: {
        async createUser(body) {
            try {
                this.pending = true;
                this.responseOK = false;
                const { data } = await axios.post(
                    "http://127.0.0.1:8000/api/register",
                    body
                );
                // localStorage.setItem("token", response.data);
                this.pending = false;
                console.log(data);
                this.user = data;
                this.responseOK = true;
            } catch (error) {
                this.pending = false;
                console.log(error);
                if (error.response.status === 401 || error.response.status == 400) {
                    this.error = "Invalid username or password";
                }
                if (error.response.status === 404) {
                    this.error = "User does not exist in our records";
                }
                if (error.response.status === 500) {
                    this.error = "Internal server error. Contact admin";
                }
            }
        },


    },
});