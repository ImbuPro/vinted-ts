import { REST, Routes, SlashCommandBuilder } from 'discord.js';

import { config } from 'dotenv';
config();

const clientId = process.env.clientId;
const guildId = process.env.guildId;
const token = process.env.token;

const commands = [
   new SlashCommandBuilder()
      .setName('vinted')
      .setDescription(
         'Reference all recents products to give you a chance to buy at the lower price !'
      )
      //   .addStringOption((option) =>
      //      option
      //         .setName('request_name')
      //         .setDescription('Name your request')
      //         .setRequired(true)
      //   )
      .addStringOption((option) =>
         option
            .setName('search')
            .setDescription('Request your dream to vinted')
            .setRequired(true)
      )
      .addStringOption((option) =>
         option
            .setName('catalog')
            .setDescription('What is it ?')
            .addChoices(
               { name: 'Femme', value: '1904' },
               { name: 'Vêtements Femme', value: '4' },
               { name: 'Chaussures Femme', value: '16' },
               { name: 'Sacs Femme', value: '19' },
               { name: 'Accessoires Femme', value: '1187' },
               { name: 'Beauté Femme', value: '146' },
               { name: 'Hommes', value: '5' },
               { name: 'Vêtements Hommes', value: '2050' },
               { name: 'Chaussures Hommes', value: '1231' },
               { name: 'Accessoires Hommes', value: '82' },
               { name: 'Soins Hommes', value: '139' }
            )
            .setRequired(false)
      )
      .addStringOption((option) =>
         option
            .setName('price_to')
            .setDescription('What is the maxiumum price ?')
            .setRequired(false)
      )
      .addStringOption((option) =>
         option
            .setName('price_from')
            .setDescription('What is the minimum price ?')
            .setRequired(false)
      )
      .addStringOption((option) =>
         option
            .setName('color')
            .setDescription('What color ?')
            .setRequired(false)
            .addChoices(
               { name: 'black', value: '1' },
               { name: 'grey', value: '3' },
               { name: 'white', value: '12' },
               { name: 'cream', value: '20' },
               { name: 'body', value: '4' },
               { name: 'aprico', value: '21' },
               { name: 'orange', value: '11' },
               { name: 'coral', value: '22' },
               { name: 'red', value: '7' },
               { name: 'burgun', value: '23' },
               { name: 'pink', value: '5' },
               { name: 'rose', value: '24' },
               { name: 'purple', value: '6' },
               { name: 'lilac', value: '25' },
               { name: 'light', value: '26' },
               { name: 'blue', value: '9' },
               { name: 'navy', value: '27' },
               { name: 'turquo', value: '17' },
               { name: 'green', value: '10' },
               { name: 'khaki', value: '16' },
               { name: 'brown', value: '2' },
               { name: 'mustar', value: '29' },
               { name: 'yellow', value: '8' },
               { name: 'gold', value: '14' },
               { name: 'variou', value: '15' }
            )
      )
      .addStringOption((option) =>
         option
            .setName('brand_ids')
            .setDescription('What do you search ?')
            .setRequired(false)
      )
      //778 & 780 & 782 & 784 & 785 & 786 & 787 & 788 & 789 & 790 & 791 & 792 & 794 & 1190 & 1191
      .addStringOption((option) =>
         option
            .setName('size_ids')
            .setDescription('What size ?')
            .setRequired(false)
            .addChoices(
               { name: '38', value: '776' },
               { name: '39', value: '778' },
               { name: '40', value: '780' },
               { name: '41', value: '782' },
               { name: '42', value: '784' },
               { name: '42.5', value: '785' },
               { name: '43', value: '786' },
               { name: '43.5', value: '787' },
               { name: '44', value: '788' },
               { name: '44.5', value: '789' },
               { name: '45', value: '790' },
               { name: '45.5', value: '791' },
               { name: '46', value: '792' },
               { name: '47', value: '794' },
               { name: '48', value: '1190' },
               { name: '49', value: '1191' },
               { name: 'XS', value: '206' },
               { name: 'S', value: '207' },
               { name: 'M', value: '208' },
               { name: 'L', value: '209' },
               { name: 'XL', value: '210' },
               { name: 'XLL', value: '211' }
            )
      )
      .addStringOption((option) =>
         option
            .setName('material_ids')
            .setDescription('What material ?')
            .setRequired(false)
      ),

   new SlashCommandBuilder()
      .setName('clear')
      .setDescription('to cancel request on vinted bot')
      .addStringOption((option) =>
         option
            .setName('request_name')
            .setDescription('request to cancel')
            .setRequired(true)
      ),
   new SlashCommandBuilder()
      .setName('list')
      .setDescription('list all request of yourself'),
   new SlashCommandBuilder()
      .setName('listall')
      .setDescription('list all request'),
].map((command) => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.token ?? '');

rest
   .put(
      Routes.applicationGuildCommands(
         process.env.clientId ?? '',
         process.env.guildId ?? ''
      ),
      { body: commands }
   )
   .catch(console.error);
