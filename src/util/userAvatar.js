import "dotenv/config";
import { Colors, EmbedBuilder } from "discord.js";

export const userAvatar = async (interaction) => {
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
            ? target.displayAvatarURL({ size: 1024, dynamic: true })
            : interaction.user.displayAvatarURL({ size: 1024, dynamic: true }),
        )
        .setFooter({
          text: process.env.BOT_FOOTER,
          iconURL: interaction.client.user.displayAvatarURL(),
        })
        .setColor(Colors.Gold),
    ],
  });
};
