const { Colors } = require("discord.js");
const { EmbedBuilder } = require("discord.js");

const userBanner = async (interaction) => {
  const embed = new EmbedBuilder();
  const user = interaction.user;
  const target = interaction.options.getUser("user");
  let banner;
  if (!target) {
    await user
      .fetch(true) // Memaksa fetch data pengguna
      .then((fetchedUser) => {
        banner = fetchedUser.bannerURL({ size: 1024 });
      })
      .catch(console.error);
  } else {
    await target
      .fetch(true) // Memaksa fetch data pengguna
      .then((fetchedUser) => {
        banner = fetchedUser.bannerURL({ size: 1024 });
      })
      .catch(console.error);
  }
  await interaction.reply({
    embeds: [
      embed
        .setTitle(
          `${
            banner
              ? (target ? target.username : interaction.user.username) +
                "'s banner"
              : (target ? target.username : interaction.user.username) +
                "'s doesn't have a banner"
          } `,
        )
        .setImage(banner)
        .setFooter({
          text: `Copyright © 2023 SEMVR | Made with love ✨`,
          iconURL: interaction.client.user.avatarURL(),
        })
        .setColor(banner ? Colors.Gold : Colors.Red),
    ],
  });
};

module.exports = { userBanner };
