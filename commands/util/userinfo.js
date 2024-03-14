const { Colors } = require("discord.js");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const embed = new EmbedBuilder();
module.exports = {
  category: "util",
  data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("Get user information")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("Display information of target user."),
    ),
  async execute(interaction) {
    let user;
    if (interaction.options.getUser("user")) {
      user = interaction.options.getUser("user");
    } else {
      user = interaction.user;
    }

    let banner, name, id, username, avatar, born, joined;

    await user
      .fetch(true) // Memaksa fetch data pengguna
      .then((fetchedUser) => {
        banner = fetchedUser.bannerURL({ size: 1024 });
      })
      .catch((e) => console.log(e));

    name = user.globalName;
    username = user.username;
    id = user.id;
    avatar = user.avatarURL({ size: 1024 });

    born = new Date(user.createdTimestamp);
    var age = Math.floor((new Date() - born) / 31536000000);

    joined = await interaction.guild.members
      .fetch(id)
      .then((res) => res.joinedTimestamp)
      .catch((e) => console.log(e));
    joined = new Date(joined).toLocaleString();

    await interaction.reply({
      embeds: [
        embed
          .setAuthor({ name: `User Information ${username}`, iconURL: avatar })
          .setThumbnail(avatar)
          .setDescription("`🌻` " + `<@${id}>`)
          .setFields(
            { name: " ", value: " " },
            {
              name: "`👑` **NICKNAME**",
              value: "`👑` " + (name ? name : username),
              inline: true,
            },
            { name: "`🆔` **USER ID**", value: "`🆔` " + id, inline: true },
            { name: " ", value: " " },
            {
              name: "`📅` **BORN**",
              value:
                "`📅` `" +
                born.toLocaleString() +
                " | " +
                age +
                " year(s) ago`",
            },
            { name: " ", value: " " },
            {
              name: "`🚧` **JOINED**",
              value: "`🚧` `" + joined + "`",
            },
            { name: " ", value: " " },
            {
              name: `${banner ? "`📷` **BANNER**" : " "}`,
              value: " ",
            },
          )
          .setImage(banner)
          .setFooter({
            text: `Copyright © 2023 SEMVR | Made with love ✨`,
            iconURL: interaction.client.user.avatarURL(),
          })
          .setColor(Colors.Gold),
      ],
    });
  },
};
