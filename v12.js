const Discord = require("discord.js")
exports.run = async(client, msg, args) => {
    if(!msg.member.permissions.has('MANAGE_CHANNELS')) return msg.reply(':x: You Do Not Have Permission To Use This Command!')
 
        const name = args.join(" ")

        if (!name) return msg.channel.send(`:x: Missing a Name, Please Specify the name!`)
 
        msg.channel.setName(name)

        var confir = new Discord.MessageEmbed()
        .setColor('0x06F7C7')
        .setDescription(`:white_check_mark: ${msg.author}, I Have Successfully set the name of the Channel to **${name}**!\n\nCreated by [Nickzz](https://github.com/NickzzDev/)`)
        msg.channel.send(confir);
        msg.delete();

    }
