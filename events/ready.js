const { Events, ActivityType } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    const activity = [
      "🌼 Punokawan",
      "🌼 Pandawa",
      "🌼 SEMVR V1",
      "🌼 Karangkadempel",
    ];
    let enuma = 0;
    setInterval(() => {
      if (enuma < activity.length - 1) {
        enuma++;
      } else {
        enuma = 0;
      }
      client.user.setActivity(activity[enuma], {
        type: ActivityType.Watching,
      });
    }, 5000);
    const semvr =
      "  ___  ___ _ __ _____   ___ __ \r\n / __|/ _ \\ '_ ` _ \\ \\ / / '__|\r\n \\__ \\  __/ | | | | \\ V /| |   \r\n |___/\\___|_| |_| |_|\\_/ |_|   \r\n";
    console.log(semvr);
    console.log(` 🚀 Ready! Logged in as ${client.user.tag}`);
    console.log(` 🌼 Watching ${client.guilds.cache.size} server`);
    if (process.env.SEND_ANNOUNCE == "yes") {
      console.log(` 🌼 Announce sended`);
      const channel = client.channels.cache.get("1096004905761775656");
      channel.send(
        "<a:gunungan:1096043083696701570> **[UPDATE]**" +
          "\n<a:awan:1096044586213851177> [SEMVR](https://discord.gg/g4AzF5FvHH) is back in orbit and is currently in beta status with the use of a new framework for our bot optimization." +
          "\n`Some of the features that you can use now are` :" +
          "```" +
          "/user\n" +
          "  ├─ info\n" +
          "  ├─ avatar\n" +
          "  └─ banner\n" +
          "/server\n" +
          "  ├─ info\n" +
          "  └─ icon\n" +
          "/ping\n" +
          "```" +
          "For more information, join the official [SEMVR](https://discord.gg/g4AzF5FvHH) discord server",
      );
    }
  },
};
