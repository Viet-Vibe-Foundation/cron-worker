import axios from "axios";

const SECRET_TRUST_CLIENT = process.env.SECRET_TRUST_CLIENT;

// axios.defaults.baseURL = "https://vietvibe.org/api/";

// const res = await axios.post("/webhooks/notify", {
//   data: {},
//   headers:{
//     'Content-Type': 'application/json',
//     'secret': '1D1683DF674794D34E6CB956322FC'
//   }
// });

// console.log(res.data);


console.log("SECRET_TRUST_CLIENT", SECRET_TRUST_CLIENT);

export default axios;