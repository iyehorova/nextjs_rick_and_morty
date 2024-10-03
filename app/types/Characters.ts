import { ResponseInfo } from "./ResponseInfo"

export interface Characters { 
  "info": ResponseInfo,
  "results": Character[]
}

export interface Character { 
  "id": number,
  "name": string,
  "status": 'Alive' | 'Dead' | 'unknown',
  "species": string,
  "type": string,
  "gender": "Male" | "Female",
  "origin": {
    "name": string,
    "url": string
  },
  "location": {
    "name": string,
    "url": string
  },
  "image": string,
  "episode": [
    string
  ],
  "url": string,
  "created": string
}