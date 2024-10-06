export function getFiltersParams(filters: {[key: string]: string}, currentPage: number) { 
  const filtersParams = Object.keys(filters).map((key) => {
    if (filters[key]) {
      return `${key}=${filters[key]}`;
    }
  }).filter(el => !!el).join('&');
  const result = filtersParams ? `page=${currentPage}&` + filtersParams : `page=${currentPage}`;
  console.log('result params', result);
  console.log('filtersParams', filtersParams);
  console.log('filtersParams', !!filtersParams);
  return result;
}