import { Params } from '@/app/types/Params';

export function transformSearchParamsToString(params: Params | undefined) {
  let newApiQuery = '';

  if (params) {
    const paramsArray = [];

    for (const [key, value] of Object.entries(params)) {
      paramsArray.push(`${key}=${value}`);
    }

    newApiQuery = paramsArray.join('&');
  }

  return newApiQuery;
}
