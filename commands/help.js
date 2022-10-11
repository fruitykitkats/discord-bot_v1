// Copyright (c) 2017 FruityKitKats. All rights reserved.

module.exports.run = async (bot, message, args) => { 
    var fs = require('fs'); 
    var commandsList = fs.readFileSync('Storage/commands.txt', 'utf8'); 
    message.channel.send(commandsList) 
}

module.exports.config = { 
    command: 'help'
};
