 import axios from "axios";


const axiosClient = axios.create({
    baseURL: 'http://localhost:3000',
    headers: { // các header của request
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
    },
});

export default axiosClient

// import axios from "axios";

// const commonConfig = {
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// };

// export default (baseURL) => {
//   return axios.create({
//     baseURL,
//     ...commonConfig,
//   });
// };