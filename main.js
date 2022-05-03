const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = '%';

const{token} = require("./config.json");

const { MessageAttachment, MessageEmbed } = require("discord.js");

const cheerio = require('cheerio');
const request = require('request');

function calculateDifference (date){
    var date2 = new Date();
    var Difference_In_Time = date2.getTime() - date.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);    
    return Difference_In_Days;
}

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
        var days = calculateDifference(new Date("09/05/1995"));
        message.channel.send(`Days since <@163440449925808129> has been funny: ` + (days|0));
    } else if (command == 'jiggs'){
        var days = calculateDifference(new Date("06/08/2002"));
        message.channel.send(`Days since <@360488559309750273> has touched grass: ` + (days|0));
    } else if (command == 'donkey'){
        var days = calculateDifference(new Date("10/19/2002"));
        message.channel.send(`Days since <@225032479734628353> has had a personality: ` + (days|0));
    } else if (command == 'help'){
        message.channel.send(`%raf: Makes fun of Raf\n%jiggs: Makes fun of Jiggs\n%donkey: Makes fun of Donkey\n%help: Displays commands\n`);   
    }else if (command == 'nav'){
        client.on('messageCreate',message=>"");
        const file = new MessageAttachment("./dinnerman pics/dinner1.jpg");
        const userEmbed = new MessageEmbed()
        .setTitle('Dinnerman')
        .setImage("https://imgur.com/GPwWlB5")
        message.channel.send({ embeds: [userEmbed] });
    }
    });

client.login(token);