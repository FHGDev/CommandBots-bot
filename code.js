const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "c!";

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === prefix +'ping') {
    message.reply('pong');

	}
});

client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === prefix + 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

client.on('message', message => {
if (message.content === prefix + 'foo') {
		message.channel.sendMessage("bar!");
	} 
 });

client.on('message', message => {
if (message.content === prefix + 'ban') {
	if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('you do not have permission to access that command.');
	const member = message.mentions.members.first();
	if (!member) return message.reply('Invalid usage, please do \`c!ban @user\`');
	member.ban({})
    reason: {}
}
});

client.login(process.env.token);
