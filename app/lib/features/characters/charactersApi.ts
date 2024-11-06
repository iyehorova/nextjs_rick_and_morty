import { BASE_CHARACTERS_URL } from '@/app/constant';
import { Characters } from '@/app/types/Characters';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const charactersApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_CHARACTERS_URL }),
  reducerPath: 'charactersApi',
  tagTypes: ['Characters'],
  endpoints: build => ({
    getCharacters: build.query<Characters, number>({
      query: (page = 1) => `?page=${page}`,
      providesTags: ['Characters'],
    }),
    getFilterCharacters: build.query<Characters, string>({
      query: params => `?${params}`,
      providesTags: ['Characters'],
    }),
  }),
});

export const { useGetCharactersQuery, useGetFilterCharactersQuery } =
  charactersApiSlice;
