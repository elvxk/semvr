const { Colors } = require("discord.js");
const { EmbedBuilder } = require("discord.js");

const userAvatar = async (interaction) => {
  const embed = new EmbedBuilder();
  const target = interaction.options.getUser("user");
  await interaction.reply({
    embeds: [
      embed
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
};

module.exports = { userAvatar };
