const Discord = require("discord.js");
const { TOKEN } = require("token.js")
const { SlashCommandBuilder } = require("@discordjs/builders");
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});




const fs = require("fs")
const bdd = require("./bdd.json");






var prefix = "!"

client.login("MTA4NjIxNjQ5ODA1OTY4MTg3Mg.G2fk5_.PHavlE2QdXYyvoE4v1b-QLVeo8LBEqCfSLh1QA")
//bot co
client.on("ready", () => {
    client.guilds.cache.get("1009915692977504348").commands.create(ping)
    client.user.setActivity("Un gros cul", { type: "WATCHING" })
    client.user.setUsername("Botte")
    console.log("bot operationnel");
});


const ping = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Renvoie pong");




//detection de la commande slash
client.on("interactionCreate", interaction => {
    if (interaction.isCommand()) {
        if (interaction.commandName == "ping") {
            interaction.reply("pong")
        }
    }
})

client.on("messageCreate", message => {
        if (message.content.startsWith("!mb")){
            console.log("2");
            message.reply("c'est la commande mb")
        }
})


client.on("messageCreate", message => {
    if (message.author.bot){
        console.log(message.author)
        return
    }
    console.log("salut")
    message.reply("salut")
    console.log(message.content)
    console.log(message.author);
    if(message.content.startsWith == "salut"){
        console.log("salut2");
    }
})



function Savebdd() {
    fs.writeFi1e(" ./bdd .json", JSON.stringify(bdd, nul, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue.")
    });
} 