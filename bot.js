const discord = require('discord.js');
const bot = new discord.Client();

const prefix = "c!";

bot.on('ready', () => {
  console.log('I am ready!')
	bot.user.setGame(`Loading ${bot.user.username}`)
	setInterval(() => {
		bot.user.setGame(`c!help | ${bot.guilds.array().length} server(s)`)
	}, 10000)
});

bot.on('message', message => {
	let channel = message.channel
	
  if (message.content === prefix +'ping') {
    message.channel.send(":ping_pong: PONG! My ping is " + bot.ping + "ms!");

}
	if (message.content === prefix +'invite') {
    message.channel.send("https://discordapp.com/oauth2/authorize?client_id=382002104576901121&scope=bot&permissions=301153342");

}
	 // If the message is "what is my avatar"
  if (message.content === prefix + 'avatar') {
    // Send the user's avatar URL
    message.channel.send(message.author.avatarURL);
  }
	if (message.content === prefix + 'foo') {
		message.channel.send("bar!");
	}
	if (message.content.startsWith(prefix + "ban")) {
		if (message.member.hasPermission("BAN_MEMBERS")) {
			let member = message.mentions.members.first();
			// If successful, do this
			member.ban().then((member) => {
				channel.send(`:wave: ${member.displayName} has been banned! :point_right:`)
			}).catch(() => {
				channel.send(`I can't ban without the permissions...`) 
			})
		} else {
			
		}
	}
	if (message.content == prefix + "help") {
  const embed = new discord.RichEmbed()
  .setTitle("Commando Help")
  .setDescription(`Utility: Ping, and Ban\n\nFun: avatar, foo. All for now!`)
  .setThumbnail("https://cdn.discordapp.com/attachments/365166852172939265/393478008909856778/Creeper_Network.jpg")
  
channel.send(embed)
}
});

bot.login(process.env.token);
