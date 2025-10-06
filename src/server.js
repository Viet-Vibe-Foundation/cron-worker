import axios from "axios";

axios.defaults.baseURL = "https://vietvibe.org/api/";

export default {
  async fetch() {
    try {
      const res = await axios.post("/webhooks/notify", {}, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response:", res.data);

      return new Response(JSON.stringify(res.data), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(
        JSON.stringify({ error: err.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  },
};
