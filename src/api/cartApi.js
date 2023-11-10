import createApiClient from "./axiosClient";

const cartApi = {
    getAllProducts(idUser) {
        const url = `/api/${idUser}/cart`;
        return createApiClient.get(url);
    },
};

export default cartApi;