const { Colors } = require("discord.js");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const iconEmbed = new EmbedBuilder();
module.exports = {
  category: "util",
  data: new SlashCommandBuilder()
    .setName("servericon")
    .setDescription("Get server icon"),
  async execute(interaction) {
    await interaction.reply({
      embeds: [
        iconEmbed
          .setTitle(`${interaction.guild.name}'s icon`)
          .setImage(interaction.guild.iconURL({ size: 1024, dynamic: true }))
          .setFooter({
            text: `Copyright © 2023 SEMVR | Made with love ✨`,
            iconURL: interaction.client.user.avatarURL(),
          })
          .setColor(Colors.Gold),
      ],
    });
  },
};
