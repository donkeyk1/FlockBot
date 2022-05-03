const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = '%';

const{token} = require("./config.json");

client.once('ready', () =>{
    console.log('Flock Bot is online');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) ||message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    } else if (command == 'raf'){
        var date1 = new Date("09/05/1995");
        var date2 = new Date();
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    message.channel.send(`Days since <@163440449925808129> has been funny: ` + (Difference_In_Days|0));
    }
});

client.login(token);