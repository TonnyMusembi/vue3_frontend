import { defineStore } from "pinia";
import axios from "axios";
// import API from "../services/API";
export const useAuthStore = defineStore("auth-store", {
    state: () => ({
        viewToDisplay: "LOGIN",
        pending: false,
        error: "",
        user: null,
        responseOK: false,
    }),

    actions: {
        setViewToDisplay(view) {
            this.viewToDisplay = view;
        },
        async login(body) {
            try {
                this.pending = true;
                this.responseOK = false;
                const { data } = await axios.post(
                    "http://127.0.0.1:8000/api/login",
                    body
                );

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

        logout() {
            localStorage.removeItem("auth-store");
            this.user = null;
        },
        clearErrors() {
            this.error = "";
        },
        persist: true,
    },
});