import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID TAuCx802OuzBxVWa7tj2m2WogyfSENU5RVq0a1hcRdE"
    }
});
