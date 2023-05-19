// make a scrap on vinted.fr

import Hero from '@ulixee/hero-playground';
import { VintedRequest } from './types';

export const GrabItems = async ({
   search_text,
   catalog_ids = '',
   price_to = '',
   price_from = '',
   color_ids = '',
   brand_ids = '',
   size_ids = '',
   material_ids = '',
   video_game_rating_ids = '',
   status_ids = '',
}: VintedRequest) => {
   try {
      const hero = new Hero({ showChrome: true });
      await hero.goto('https://www.vinted.fr/');
      await hero.waitForPaintingStable();
      await hero.goto(
         `https://www.vinted.fr/api/v2/catalog/items?search_text=${search_text}&catalog_ids=${catalog_ids}&price_from=${price_from}&price_to=${price_to}&color_ids=${color_ids}&brand_ids=${brand_ids}&size_ids=${size_ids}&material_ids=${material_ids}&video_game_rating_ids=${video_game_rating_ids}&status_ids=${status_ids}&is_for_swap=0&page=5&per_page=1`
      );
      await hero.waitForPaintingStable();
      const request = await hero.document.querySelector('pre').textContent;

      const clothes = await JSON.parse(request ?? '');
      if (!clothes.items) return [];

      await hero.close();
      return await clothes.items;
   } catch (error) {
      console.log('');
   }
};

// delay function
export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
