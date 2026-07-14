const { Client, GatewayIntentBits } = require("discord.js");
const cron = require("node-cron");
const questions = require("./questions.json");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

// Configuration
const CHANNEL_ID = "1508394117577703624";
const ROLE_ID = "1508579992869671103";

client.once("ready", () => {
  console.log(`Connecté en tant que ${client.user.tag}`);

  // Tous les jours à 9h (heure du serveur)
  cron.schedule("0 9 * * *", async () => {

    const channel = await client.channels.fetch(CHANNEL_ID);

    const question = questions[Math.floor(Math.random() * questions.length)];

    channel.send(
      `<@&${ROLE_ID}> 📢 **Question du jour !**\n\n${question}`
    );

  }, {
    timezone: "Europe/Paris"
  });
});

client.login(process.env.TOKEN);
