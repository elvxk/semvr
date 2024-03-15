const { Colors } = require("discord.js");
const { EmbedBuilder } = require("discord.js");

const serverIcon = async (interaction) => {
  const embed = new EmbedBuilder();
  await interaction.reply({
    embeds: [
      embed
        .setTitle(`${interaction.guild.name}'s icon`)
        .setImage(interaction.guild.iconURL({ size: 1024, dynamic: true }))
        .setFooter({
          text: `Copyright © 2023 SEMVR | Made with love ✨`,
          iconURL: interaction.client.user.avatarURL(),
        })
        .setColor(Colors.Gold),
    ],
  });
};

module.exports = { serverIcon };
