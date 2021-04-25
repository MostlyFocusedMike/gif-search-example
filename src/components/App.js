import NavBar from './NavBar'
import GifContainer from './GifContainer'
import GifSearch from './GifSearch'

function App() {
  return (
    <div>
        <NavBar color='black' title="Giphy Search" />
        <div className="ui container">
          <GifSearch setGifList={setGifList}/>
          <br />
          <GifContainer gifList={gifList}/>
        </div>
    </div>
  );
}

export default App;
