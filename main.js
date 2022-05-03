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

client.on('messageCreate', message =>{
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
        message.channel.send(`Days since <@360488559309750273> has felt the touch of a woman: ` + (days|0));
    } else if (command == 'donkey'){
        var days = calculateDifference(new Date("10/19/2002"));
        message.channel.send(`Days since <@225032479734628353> has had a personality: ` + (days|0));
    } else if (command == 'help'){
        message.channel.send(`%help: Displays commands\n%raf: Makes fun of Raf\n%jiggs: Makes fun of Jiggs\n%donkey: Makes fun of Donkey\n%nav: Generates a Tinman picture\n%veesh: Lets veesh know the right thing to do\n%yungbruh: The fog is coming`);   
    }else if (command == 'nav'){
        client.on('messageCreate',message=>"");
        const urls = ["https://imgur.com/GPwWlB5.jpeg", "https://i.imgur.com/0PzYk8v.jpeg","https://i.imgur.com/Yy7zZMy.jpeg","https://i.imgur.com/8dWeddP.jpeg","https://i.imgur.com/kStaLxE.jpeg", "https://i.imgur.com/iXXUOB4.jpeg"];
        const file = new MessageAttachment("./dinnerman pics/dinner1.jpg");
        const userEmbed = new MessageEmbed()
        .setTitle('Tinman')
        .setImage(urls[Math.floor(Math.random()*urls.length)])
        message.channel.send({ embeds: [userEmbed], content:"This you? <@297099102989189121>" });
    } else if (command == 'veesh'){
        message.channel.send(`<@428622485949513729> its okay. Let the kids out of the basement.`);
    }else if (command == 'yungbruh'){
        const numzEmbed = new MessageEmbed()
        .setTitle('The fog...')
        .setImage("https://i.imgur.com/NPaxtz8.jpeg")
        message.channel.send({ embeds: [numzEmbed], content:"<@257275595132502016> it's coming." });
    }
    });
client.login(token);