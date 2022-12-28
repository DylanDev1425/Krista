const Discord = require('discord.js');
 
module.exports = {
  name: "ready",
  emiter: "on",
  run: async (client, message) => {
 
 client.user.setPresence({
  status: 'dnd',
  activities: [{
    name: 'Krista',
    type: 'WATCHING'
  }]
});

// Ejemplo usando STREAMING:

client.user.setPresence({
  status: 'dnd',
  activities: [{
    name: 'Krista',
    type: 'STREAMING',
    url: 'https://twitch.tv/CraterMaik'
  }]
});
 
 }
 
};