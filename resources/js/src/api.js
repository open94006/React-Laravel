const axios = window.axios;

// const BASE_API_URL = "http://localhost:8000/api";
const BASE_API_URL = "http://localhost/React-Laravel/public/api";

export default {
    getAllPosts: () => axios.get(`${BASE_API_URL}/post`),
    getOnePosts: (id) => axios.get(`${BASE_API_URL}/post/${id}/edit`),
    addPosts: (post) => axios.post(`${BASE_API_URL}/post`, post),
    updatePosts: (post, id) => axios.put(`${BASE_API_URL}/post/${id}`, post),
    deletePosts: (id) => axios.delete(`${BASE_API_URL}/post/${id}`),
}