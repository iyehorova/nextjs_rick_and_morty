import { ResponseInfo } from './ResponseInfo';

export interface Locations {
  info: ResponseInfo;
  results: Location[];
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
