import axios from "axios";

axios.defaults.baseURL = "https://vietvibe.org/api/";

const res = await axios.post("/webhooks/notify", {
  data: {},
  headers:{
    'Content-Type': 'application/json',
  }
});

console.log(res.data);


export default axios;