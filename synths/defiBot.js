require("dotenv").config();
// Discord.js Config
const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.SDEFI_TOKEN;
const serverId = process.env.SERVER_ID;
client.login(token);

// ** INVOKE DISCORD BOT **
client.on("ready", () => {
  console.log(
    `>>> sDEFI Discord bot is Online, please wait while its fetching data <<<`
  );
  setBot();
});
client.on("rateLimit", (info) => {
  console.log(
    `Rate limit hit ${
      info.timeDifference
        ? info.timeDifference
        : info.timeout
        ? info.timeout
        : "Unknown timeout "
    }`
  );
});

async function setBot(sDEFI, sDEFIRate) {
  try {
    const guild = client.guilds.cache.get(`${serverId}`);

    console.log(`logging from bot sXAG: ${sDEFIRate}`);

    // SET BOT NAME
    await guild.me.setNickname(`$${sDEFIRate}`);

    // SET ACTIVITY
    await client.user.setActivity(`${sDEFI}`, {
      type: "PLAYING",
    });
    console.log("executed setBot() to set the name & activity!");
  } catch (error) {
    console.log("Your Error: ", error);
  }
}
exports.setBot = setBot;
