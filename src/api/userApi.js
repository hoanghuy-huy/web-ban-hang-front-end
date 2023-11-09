import createApiClient from "./axiosClient";

const userApi = {
    login() {
        const url = `/login`;
        const data = {
            username:this.username,
            password:this.password
        }
        return createApiClient.post(url,data)
    },
    register() {
        const url = '/register'
        const data = {
            id:this.id,
            username:this.username,
            password:this.password,
            email:this.email,
        }
        return createApiClient.post(url,data)
    }
};

export default userApi;