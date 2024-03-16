import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("🏓 Ping the bot!");

export const execute = async (interaction) => {
  const sent = await interaction.reply({
    content: "Pinging...",
    fetchReply: true,
  });
  interaction.editReply(
    `Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`,
  );
};
