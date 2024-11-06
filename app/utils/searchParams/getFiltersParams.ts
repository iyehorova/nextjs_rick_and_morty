import { Params } from '@/app/types/Params';

export function getFiltersParams(filters: Params) {
  return Object.keys(filters)
    .map(key => {
      if (filters[key]) {
        return `${key}=${filters[key]}`;
      }
    })
    .filter(el => !!el)
    .join('&');
}
