import { Pages } from '../types/Pages';

export const BASE_URL = 'https://rickandmortyapi.com/api/';

export const BASE_CHARACTERS_URL = BASE_URL + Pages.character;
export const BASE_LOCATION_URL = BASE_URL + Pages.location;
export const BASE_EPISODE_URL = BASE_URL + Pages.episode;

export const MAX_PAGINATION_ITEMS = 5;
export const ITEMS_PER_PAGE = 20;
export const FIRST_PAGE = 1;

export const VIDEO_DURATION = 4500;
export const VIDEO_DELAY = 1 * 60 * 1000;
