var tmi = require('tmi.js');
var keys = require('./keys');
var currentChannel = ["TheKingOfPikmin", "walters954"]

var options = {
  options:{
    debug: true
  },
  connection:{
    cluster: "aws",
    reconnect: true
  },
  identity:{
    username: "YungYungerbot",
    password: keys.currentApiKey()
  },
  channels: currentChannel
};

var client = new tmi.client(options);
client.connect();


// client.on('connected', (address, port) =>
// {
//   client.action(currentChannel[0], "The Yungerson is here!")
// });

client.on('chat', (channel, user, message, self) =>
{
  message = message.toLowerCase()
  if(message.includes('yung'))
  {
    client.action(channel, user['display-name'] + " is not as yung as me!")
  }
  else if(message.includes('mike'))
  {
    client.action(channel,"You got em bois")
  }
  else if(message.includes('jeremy'))
  {
    client.action(channel,"Pikim banned me once but now we are friends.")
  }else if(message.includes('lag'))
  {
    client.action(channel,"Everyone has gotta lag sometimes!")
  }
})
