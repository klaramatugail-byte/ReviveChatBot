const { Client, GatewayIntentBits } = require("discord.js");
const cron = require("node-cron");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

// Configuration
const CHANNEL_ID = "1508394117577703624";
const ROLE_ID = "1508579992869671103";

const questions = [
  "Quel est ton jeu préféré de tous les temps ?",
  "Si tu pouvais voyager n'importe où demain, où irais-tu ?",
  "Quel film peux-tu revoir sans jamais t'en lasser ?",
  "Quelle musique écoutes-tu en boucle en ce moment ?",
  "Tu préfères la mer ou la montagne ?",
  "Quel est ton meilleur souvenir gaming ?",
  "Si tu pouvais avoir un super-pouvoir, lequel choisirais-tu ?",
  "Quel est ton plat préféré ?",
  "Quel personnage de fiction aimerais-tu rencontrer ?",
  "Quel est ton plus gros rêve ?",
  "Quel jeu attends-tu le plus ?",
  "Quelle est la chose la plus drôle qui te soit arrivée ?",
  "Tu préfères être riche ou célèbre ?",
  "Quel talent aimerais-tu apprendre instantanément ?",
  "Quel est ton animal préféré ?"
];

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
