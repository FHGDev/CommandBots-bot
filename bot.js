const discord = require('discord.js');
const bot = new discord.Client();

const prefix = "c!";

bot.on('ready', () => {
  console.log('I am ready!')
	bot.user.setGame(`c!help | ${bot.guilds.array().length} server(s)`)
});

bot.on('message', message => {
  if (message.content === prefix +'ping') {
    message.channel.send(":ping_pong: PONG! My ping is " + bot.ping + "ms!");

}
	 // If the message is "what is my avatar"
  if (message.content === prefix + 'avatar') {
    // Send the user's avatar URL
    message.channel.send(message.author.avatarURL);
  }
	if (message.content === prefix + 'foo') {
		message.channel.send("bar!");
	}
	if (message.content === prefix + 'ban') {
	if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply('you do not have permission to access that command.');
	let member = message.mentions.members.first();
	if (!member) return message.reply('Invalid usage, please do \`c!ban @user\`');
	member.ban({})
    reason: {}
}
	if (message.content == prefix + "help") {
		let channel = message.channel
  
  const embed = new discord.RichEmbed()
  .setTitle("Commando Help")
  .setDescription(`Utility: Ping, and Ban\n\nFun: avatar, foo. All for now!`)
  .setThumbnail("https://cdn.discordapp.com/attachments/365166852172939265/393478008909856778/Creeper_Network.jpg")
  
channel.send(embed)
}
});

bot.login(process.env.token);
