export const checkRolePos = (interaction, target, name) => {
  const client = interaction.client.user.id;

  const target_pos = target.rawPosition;
  const client_pos = interaction.guild.members.cache
    .get(client)
    .roles.cache.find((r) => r.name === name).rawPosition;

  if (client_pos > target_pos) {
    return true;
  } else {
    return false;
  }
};
