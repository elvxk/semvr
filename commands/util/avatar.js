const { Colors } = require("discord.js");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const avatarEmbed = new EmbedBuilder();
module.exports = {
  category: "util",
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Get user avatar")
    .addUserOption((option) =>
      option.setName("target").setDescription("user target."),
    ),
  async execute(interaction) {
    const target = interaction.options.getUser("target");
    await interaction.reply({
      embeds: [
        avatarEmbed
          .setTitle(
            `${target ? target.username : interaction.user.username}'s avatar`,
          )
          .setImage(
            target
              ? target.avatarURL({ size: 1024, dynamic: true })
              : interaction.user.avatarURL({ size: 1024, dynamic: true }),
          )
          .setFooter({
            text: `Copyright © 2023 SEMVR | Made with love ✨`,
            iconURL: interaction.client.user.avatarURL(),
          })
          .setColor(Colors.Gold),
      ],
    });
  },
};
