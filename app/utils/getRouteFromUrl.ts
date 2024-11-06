export function getRouteFromUrl(url: string): string {
  return url.split('api/')[1];
}

export function getIdFromUrl(url: string): string {
  return url.split('/').splice(-1)[0];
}

export function getRoutesFromUrl(urls: string[]): string[] {
  return urls.map(getRouteFromUrl);
}

export function getIdsFromUrl(urls: string[]): string[] {
  return urls.map(getIdFromUrl);
}
