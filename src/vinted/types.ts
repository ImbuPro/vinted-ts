import Hero from '@ulixee/hero-playground';

export type VintedRequest = {
   search_text: string;
   catalog_ids?: string;
   price_to?: string;
   price_from?: string;
   color_ids?: string;
   brand_ids?: string;
   size_ids?: string;
   material_ids?: string;
   video_game_rating_ids?: string;
   status_ids?: string;
};

export type VintedResponse = {
   id: number;
   title: string;
   price: string;
   is_visible: number;
   discount: null | number;
   currency: string;
   brand_title: string;
   is_for_swap: boolean;
   user: {
      id: number;
      login: string;
      business: boolean;
      profile_url: string;
      photo: object;
   };
   url: string;
   promoted: boolean;
   photo: {
      id: number;
      image_no: number;
      width: number;
      height: number;
      dominant_color: string;
      dominant_color_opaque: string;
      url: string;
      is_main: boolean;
      thumbnails: any[];
      high_resolution: object;
      is_suspicious: boolean;
      full_size_url: string;
      is_hidden: boolean;
      extra: object;
   };
   favourite_count: number;
   is_favourite: boolean;
   favourite_group_id: null;
   badge: null;
   conversion: null;
   service_fee: string;
   total_item_price: string;
   view_count: number;
   size_title: string;
   content_source: string;
   search_tracking_params: {
      score: number;
      matched_queries: any[];
   };
};
