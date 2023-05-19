import { useEffect, useState } from 'react';
import GifContainer from './components/GifContainer';
import GifSearchForm from './components/GifSearchForm';
import GifSearchFormUncontrolled from './components/GifSearchFormUncontrolled';
import { getSearchedGifs, getTrendingGifs } from './giphy-service';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getTrendingGifs().then(setGifs);
  }, []);

  useEffect(() => {
    if (searchTerm) getSearchedGifs(searchTerm).then(setGifs);
  }, [searchTerm]);

  return <>
    <header>
      <h1>Giphy Search Engine</h1>
    </header>
    <main>
      <GifSearchForm setSearchTerm={setSearchTerm} />
      <GifSearchFormUncontrolled setSearchTerm={setSearchTerm} />
      <GifContainer gifs={gifs} />
    </main>
  </>;
}
