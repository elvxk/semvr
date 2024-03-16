import "dotenv/config";
import { REST, Routes } from "discord.js";
import fs from "fs";
import path from "path";

const commands = [];
const __dirname = import.meta.dirname;
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const { data, execute } = await import(filePath);
    if (data && execute) {
      commands.push(data.toJSON());
    } else {
      console.log(
        ` [🔓] The command at ${filePath} is missing a required "data" or "execute" property.`,
      );
    }
  }
}

const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);

export const deployCommands = async () => {
  try {
    console.log(
      ` [🍻] Started refreshing ${commands.length} application (/) commands.`,
    );
    const data = await rest.put(
      process.env.ENV == "DEV"
        ? Routes.applicationGuildCommands(
            process.env.CLIENT_ID,
            process.env.GUILD_ID,
          )
        : Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands },
    );

    console.log(
      ` [🍻] Successfully reloaded ${data.length} application (/) commands.`,
    );
  } catch (error) {
    console.error(error);
  }
};
