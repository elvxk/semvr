const { SlashCommandBuilder } = require("discord.js");
const { serverInfo } = require("../../components/server-info");
const { serverIcon } = require("../../components/server-icon");

module.exports = {
  category: "util",
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Get server information")
    .addSubcommand((subcommand) =>
      subcommand.setName("info").setDescription("🍺 Get server information"),
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("icon").setDescription("🍺 Get server icon"),
    ),
  async execute(interaction) {
    if (interaction.options.getSubcommand() === "info") {
      serverInfo(interaction);
    } else if (interaction.options.getSubcommand() === "icon") {
      serverIcon(interaction);
    }
  },
};
