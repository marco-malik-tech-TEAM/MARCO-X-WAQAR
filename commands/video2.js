"use strict";
const { handleVideo } = require("../utils/ytVideo");

module.exports = {
  name: "video2",
  aliases: ["ytv2"],
  description: "Download YouTube video through the same authenticated route as .video. Usage: .video2 <name or link>",
  async execute(sock, msg, args) {
    return handleVideo(sock, msg, args, { prefer: "ytdlp" });
  },
};
