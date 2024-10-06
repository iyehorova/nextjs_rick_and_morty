export function getFiltersParams(filters: {[key: string]: string}) { 
  const result = Object.keys(filters).map((key) => {
    if (filters[key]) {
      return `${key}=${filters[key]}`;
    }
  }).filter(el => !!el).join('&');
  return result;
}