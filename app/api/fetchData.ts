import { BASE_CHARACTERS_URL } from "../constant";
import { Character } from "../types/Characters";

export  async function fetchData(url: string, query: string) {
  if (query) { 
    url = `${url}?${query}`;
  }
   
  const res = await fetch(url);
  const data = await res.json();
  
  return data;
}

export async function fetchDataById(url: string, id: string ) {
 
  const res = await fetch(`${url}/${id}`);
  const data = await res.json();
  
  return data;
}

export async function fetchCharactersByIds(ids: string[]) { 
  const res = await fetch(`${BASE_CHARACTERS_URL}/${ids.join(',')}`);
  const data: Character[] = await res.json();
  const extractData = data.reduce((acc, { id, name, image }) => {
    acc[id] = { name, image };
    return acc;
  }, {} as Record<string, { name: string, image: string }>);
  return extractData;
}