module.exports.run = (bot, message, args) => {
  let channel = message.channel
  
  const embed = new discord.RichEmbed()
  .setTitle("Commando Help")
  .setDescription(`Utility: Ping, and Ban\n\nFun: avatar, foo. All for now!`)
  .setThumbnail("https://cdn.discordapp.com/attachments/365166852172939265/393478008909856778/Creeper_Network.jpg")
  
  channel.send(embed)
}

module.exports.help = {
  name: "help"
}
