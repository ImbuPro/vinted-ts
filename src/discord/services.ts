import { APIEmbed, Embed, EmbedBuilder } from 'discord.js';
import { VintedResponse } from '../vinted/types';

export const embedGenerator = ({
   title,
   url,
   photo,
   price,
   currency,
   size_title,
   user,
}: VintedResponse) => {
   return new EmbedBuilder({
      title: title,
      url: url,
      color: 5174599,
      image: {
         url: photo.url,
      },
      fields: [
         {
            name: 'Price',
            value: `${price} ${currency}`,
         },
         {
            name: 'Size',
            value: `${size_title}` || 'undefined',
         },
         {
            name: 'URL',
            value: `${url}`,
         },
         {
            name: 'Is Suspicious ?',
            value: `${photo.is_suspicious}`,
         },
         {
            name: 'User Profil',
            value: `${user.profile_url}`,
         },
      ],
   });
};
