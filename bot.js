const discord = require('discord.js');
const bot = new discord.Client();
const prefix = "c!";

bot.on('ready', () => {
  console.log('I am ready!')
	bot.user.setGame(`c!help | ${client.guilds.array().length} server(s)`)
	bot.user.setUsername('CommandoBot')
  bot.user.setAvatar('https://cdn.discordapp.com/attachments/365166852172939265/393478008909856778/Creeper_Network.jpg')
});

bot.on('message', message => {
  if (message.content === prefix +'ping') {
    message.reply('pong');

}
	 // If the message is "what is my avatar"
  if (message.content === prefix + 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
	if (message.content === prefix + 'foo') {
		message.channel.sendMessage("bar!");
	}
	if (message.content === prefix + 'ban') {
	if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('you do not have permission to access that command.');
	const member = message.mentions.members.first();
	if (!member) return message.reply('Invalid usage, please do \`c!ban @user\`');
	member.ban({})
    reason: {}
}
});

bot.login(process.env.token);
