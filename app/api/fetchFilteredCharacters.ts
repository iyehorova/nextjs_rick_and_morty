import { BASE_CHARACTERS_URL } from "../constant";

export  async function fetchFilteredCharacters(query: string) {
  let url = BASE_CHARACTERS_URL;
  if (query) { 
    url = `${url}?${query}`;
  }
   
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }