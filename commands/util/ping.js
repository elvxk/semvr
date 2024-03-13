const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  category: "util",
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    const sent = await interaction.reply({
      content: "Pinging...",
      fetchReply: true,
    });
    interaction.editReply(
      `Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`,
    );
  },
};
