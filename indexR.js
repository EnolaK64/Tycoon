const fs = require('fs');
const Discord = require("discord.js")
const { TOKEN } = require("../token.js")
const { SlashCommandBuilder } = require("@discordjs/builders");
const Client = new Discord.Client({
    intents: [
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

const dataSet = new SlashCommandBuilder()
    .setName('set')
    .setDescription('Stocke les données dans un fichier JSON')
    .addStringOption(option =>
        option.setName('input')
            .setDescription('Les données à stocker')
            .setRequired(true));

const dataGet = new SlashCommandBuilder()
    .setName('get')
    .setDescription('Récupère les données du fichier JSON');

//bot token
Client.login(TOKEN)


//detect interactions
Client.on("interactionCreate", interaction => {

    //ping
    if (interaction.isCommand()) {
        if (interaction.commandName === "ping") {
            interaction.reply("pong");
        }
    }
    //bonjour
    if (interaction.isCommand()) {
        if (interaction.commandName === "bonjour") {
            interaction.reply("Bonjour à toi.");
        }
    }

    if (interaction.isCommand() && interaction.commandName === 'set') {
        const input = interaction.options.getString('input');
        const userId = interaction.user.id;
        const channelId = interaction.channel.id;
        const data = { input: input, userId: userId, channelId: channelId };
        let storedData = [];
        try {
            storedData = JSON.parse(fs.readFileSync('bdd.json'));
        } catch (error) {
            console.error(error);
        }
        storedData.push(data);
        (async () => {
            await interaction.reply("c'est set !");
        })();
    }

    if (interaction.isCommand() && interaction.commandName === 'get') {
        const data = JSON.parse(fs.readFileSync('bdd.json'));
        (async () => {
            await interaction.reply(`Les données stockées sont : ${data.input}`);
        })();
    }

})

//bot connection
Client.on("ready", () => {

    //def command on all servers
    Client.application.commands.create(data);
    Client.application.commands.create(data2);
    Client.application.commands.create(dataSet);
    Client.application.commands.create(dataGet);

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