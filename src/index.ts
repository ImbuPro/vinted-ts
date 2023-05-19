import {
   CacheType,
   ChatInputCommandInteraction,
   Client,
   GatewayIntentBits,
} from 'discord.js';
import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';
import { embedGenerator } from './discord/services';
import { GrabItems } from './vinted/services';

config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const prisma = new PrismaClient();
client.on('ready', () => {
   console.log('Bot is ready!');
});
client.on('interactionCreate', async (interaction) => {
   if (!interaction.isChatInputCommand()) return;

   const { commandName, options } = interaction;
   if (commandName === 'vinted') {
      await interaction.reply({ content: 'Let me cook...' });
      await interaction.channel?.sendTyping();
      test(interaction);
   }
});

client.login(process.env.token);

const test = async (interaction: ChatInputCommandInteraction<CacheType>) => {
   const { options, user } = interaction;
   await console.log(options.getString('search'));
   const clothes = await GrabItems({
      search_text: (await options.getString('search')) || '',
      price_from: (await options.getString('price_from')) || '',
      price_to: (await options.getString('price_to')) || '',
   });

   const isExist = await prisma.checkList.findMany({
      where: {
         discordId: user.id,
         AND: {
            productId: clothes[0].id,
         },
      },
   });
   if (isExist.length > 0) {
      await test(interaction);
   } else {
      prisma.checkList
         .create({
            data: {
               discordId: user.id,
               productId: clothes[0].id,
            },
         })
         .catch(async (err) => {
            console.log(err);
         });
      const embed = await embedGenerator(clothes[0]);
      await interaction.channel?.send({ embeds: [embed] });
   }

   await test(interaction);
};
