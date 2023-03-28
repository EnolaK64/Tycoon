const Discord = require("discord.js")
const { TOKEN } = require("./token")
const { SlashCommandBuilder} = require("@discordjs/builders");
const Client = new Discord.Client({
    intents:[
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

//slash command
const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("renvoie pong")


    //bot token
Client.login(TOKEN)

//bot connection
Client.on("ready", () => {

    //def command on all servers
    //Client.application.commands.create(data);

    //def command just in my server
    Client.guilds.cache.get("1009915692977504348").commande.create(data)


    console.log("bot ready");
})