import { fetchHandler } from "./utils";

const { VITE_API_KEY } = import.meta.env;

export const getTrendingGifs = async () => {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${VITE_API_KEY}&limit=3&rating=g`;
  const [giphyResponse] = await fetchHandler(url) // don't care about errors for this assignment
  return giphyResponse?.data || [];
}

export const getSearchedGifs = async (searchTerm) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${VITE_API_KEY}&q=${searchTerm}&limit=3&rating=g`;
  const [giphyResponse] = await fetchHandler(url)
  return giphyResponse?.data || [];
}