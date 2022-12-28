const Discord = require('discord.js');
 
module.exports = {
    name: "help",
    alias: ["ayuda"],
    run: async (client, message, args) => {
 
 
    const menu = new Discord.MessageActionRow()
    .addComponents(
      new Discord.MessageSelectMenu()
      .setCustomId('menu-help')
        .addOptions({
          label: 'Select me',
          description: 'This is a description',
          value: 'first_option',
         emoji: '😀'
        }));

  message.reply({
    content: 'Menu de ayuda',
    components: [menu]
  });
 }
 
};