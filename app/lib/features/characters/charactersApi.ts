// Need to use the React-specific entry point to import `createApi`
import { BASE_CHARACTERS_URL } from "@/app/constant";
import { Characters } from "@/app/types/Characters";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// Define a service using a base URL and expected endpoints
export const charactersApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_CHARACTERS_URL }),
  reducerPath: "charactersApi",
  // Tag types are used for caching and invalidation.
  tagTypes: ["Characters"],
  endpoints: (build) => ({
    // Supply generics for the return type (in this case `QuotesApiResponse`)
    // and the expected query argument. If there is no argument, use `void`
    // for the argument type instead.
    getCharacters: build.query<Characters, number>({
      query: (page = 1) => `?page=${page}`,
      // `providesTags` determines which 'tag' is attached to the
      // cached data returned by the query.
      providesTags: ["Characters"],
      // providesTags: () => [{ type: "Characters"}],
    }),
    getFilterCharacters: build.query<Characters, string>({
      query: (params) => `?${params}`,
      // `providesTags` determines which 'tag' is attached to the
      // cached data returned by the query.
      providesTags: ["Characters"],
    }),
  }),
});

export const { useGetCharactersQuery, useGetFilterCharactersQuery } = charactersApiSlice;