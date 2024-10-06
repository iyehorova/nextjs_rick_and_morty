import { ResponseInfo } from "./ResponseInfo"

export interface Episodes {
  "info": ResponseInfo,
  "results": Episode[]    
}

export interface Episode { 
  "id": number,
  "name": string,
  "air_date": string,
  "episode": string, //code of episode
  "characters": string[],
  "url": string,
  "created": string    
}