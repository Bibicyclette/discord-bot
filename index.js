const Discord = require("discord.js");
const prefix = "!";
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

Client.on("ready", () => {
    console.log("Bot oppéationel");
});

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //!lad
    if (message.content === prefix + "lad"){
        message.channel.send("J'en ai rien à foutre !");
    }

    //!youssef
    if (message.content === prefix + "youssef"){
        message.channel.send("Etes-vous un soumi ?");
    }

    //!nico
    if (message.content === prefix + "nico"){
        message.guild
    }

    //!tristan
    if (message.content === prefix + "tristan"){
        message.channel.send("mmmmmh, le pain de mie avec du gruyère");
    }

    //!babstonks
    if (message.content === prefix + "babstonks"){
        message.channel.send("Salut à toi jeune entrepreneur !");
    }

     //!leo
     if (message.content === prefix + "leo"){
        message.channel.send("Comment elle fait trop la ouf jajou");
    }

     //!romain
     if (message.content === prefix + "romain"){
        message.channel.send("Ptite pause ?");
    }

     //!bibi
     if (message.content === prefix + "bibi"){
        message.channel.send("Ehh gamin ! C'est quoi ton pseudo Fortnite ?");
     }

     //!commande
     if (message.content === prefix + "commande"){
         message.channel.send("**Les commandes du bot sont: **\n - !lad \n - !youssef \n - !nico \n - !tristan \n - !babstonks \n - !leo \n - !romain \n - !bibi");
     }
    
});

Client.login(process.env.TOKEN);
