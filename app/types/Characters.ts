import { ResponseInfo } from './ResponseInfo';

export interface Characters {
  info: ResponseInfo;
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  status: CharacterStatuses;
  species: CharacterSpecies;
  type: string;
  gender: CharacterGenders;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [string];
  url: string;
  created: string;
}

export enum CharacterStatuses {
  alive = 'Alive',
  dead = 'Dead',
  unknown = 'unknown',
}

export enum CharacterGenders {
  male = 'Male',
  female = 'Female',
  unknown = 'unknown',
}

export enum CharacterSpecies {
  alien = 'Alien',
  human = 'Human',
  creature = 'Mythological Creature',
  unknown = 'unknown',
  robot = 'Robot',
  animal = 'Animal',
  humanoid = 'Humanoid',
}
