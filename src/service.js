import axios from 'axios';

axios.defaults.baseURL = "https://localhost:7097";
axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    return Promise.reject(error);
  }
);
export default {
  getTasks: async () => {
    const result = await axios.get(`/items`)
    return result.data;
  },

  addTask: async (name) => {
    const result = await axios.post(`/items`, { "name": name , "isComplete": false })
    return result;
  },

  setCompleted: async (id, isComplete) => {
    const result = await axios.put(`/items/${id}/status`, { "isComplete": isComplete });
    return result;
  },

  deleteTask: async (id) => {
    console.log('deleteTask')
    const result = await axios.delete(`/items/${id}`);
    console.log(result);
    return result;
  }
};
