var Codeforces = require('codeforces-api');
const fs = require("fs");
const { Client, MessageEmbed } = require("discord.js");
const token = require('../../config.json');
const client = new Client({
    disableEveryone: true
});
client.login(token.token);
client.login(token.token);

CFK = 'e76a901b83f9589d12df677d4d799c8e102bbbe0';
CFS = 'c07fd4f00742e793d982ea1eb1136444b11e8738';

Codeforces.setApis(CFK, CFS);

module.exports = {
    name: "problem",
    category: "commands",
    description: "Returns problems of the day.",
    run: async (client, message, args) => {
        console.log("hi");
    }
}