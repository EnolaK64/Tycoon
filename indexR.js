const Discord = require("discord.js")
const { TOKEN } = require("../token.js")
const { SlashCommandBuilder} = require("@discordjs/builders");
const Client = new Discord.Client({
    intents:[
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

//slash command
const data = 
    new SlashCommandBuilder()
    .setName("ping")
    .setDescription("renvoie pong");

const data2 =
    new SlashCommandBuilder()
    .setName("bonjour")
    .setDescription("Dire bonjour au bot (il te repond Bonjour)")

    //bot token
Client.login(TOKEN)


//detect interactions
Client.on("interactionCreate", interaction =>{

    //ping
    if(interaction.isCommand()){
        if(interaction.commandName === "ping"){
            interaction.reply("pong");
        }
    }
    //bonjour
    if(interaction.isCommand()){
        if(interaction.commandName === "bonjour"){
            interaction.reply("Bonjour à toi.");
        }
    }
})

//bot connection
Client.on("ready", () => {

    //def command on all servers
    Client.application.commands.create(data);
    Client.application.commands.create(data2);

    //def command just in my server
    /*console.log(Client.guilds.cache.get("1009915692977504348").commands.cache);
    Client.guilds.cache.get("1009915692977504348").commands.fetch()
    console.log(Client.guilds.cache.get("1009915692977504348").commands.cache);
    
    
    Client.guilds.cache.get("1009915692977504348").commands.cache.map(command =>{
        command.delete()
    });*/
    //Client.guilds.cache.get("1009915692977504348").commands.create(data)
    


    console.log("bot ready");
})