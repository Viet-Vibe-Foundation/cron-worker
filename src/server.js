import axios from "axios";

export default {
  async fetch(request, env, ctx) {
    return new Response("Worker is running!", { status: 200 });
  },

  async scheduled(event, env, ctx) {
    console.log(`Cron run at: ${new Date(event.scheduledTime).toISOString()}`);

    try {
      await axios.post("https://vietvibe.org/api/webhooks/notify", {}, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Send success!");
    } catch (err) {
      console.error("Error:", err.message);
    }
  },
};
