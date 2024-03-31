import axios from 'axios';


axios.defaults.baseURL = process.env.REACT_APP_API_SERVER;
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
    console.log("get todo",axios);
    const result = await axios.get(`https://todolistserver-ai4z.onrender.com/items`)
    return result.data;
  },

  addTask: async (name) => {
    const result = await axios.post(`/items`, { "name": name , "isComplete": false })
    console.log("res",result,axios);
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
