import { Params } from '../../types/Params';

export function getFiltersParams(filters: Params, currentPage: number) {
  const filtersParams = Object.keys(filters)
    .map(key => {
      if (filters[key]) {
        return `${key}=${filters[key]}`;
      }
    })
    .filter(el => !!el)
    .join('&');
  
  const result = filtersParams
    ? `page=${currentPage}&` + filtersParams
    : `page=${currentPage}`;
  
  return result;
}
