import axios from "axios";

axios.create({
    baseURL: "localhost:3333"
});

export default axios;