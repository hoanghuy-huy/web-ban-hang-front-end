
import createApiClient from "./axiosClient";

const productAPI = {
    getAllProducts() {
        const url = `/api/products`;
        return createApiClient.get(url);
    },
    getAllCarts() {
        const url = `/api/users/`;
        return createApiClient.get(url);
    },
    getOne(id) {
        const url = `/api/products/${id}`;
        return createApiClient.get(url);
    }
};

export default productAPI;