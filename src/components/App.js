import NavBar from './NavBar'
import GifContainer from './GifContainer'
import GifSearch from './GifSearch'

function App() {
  return (
    <div>
        <NavBar color='black' title="Giphy Search" />
        <GifSearch/>
        <GifContainer/>
    </div>
  );
}

export default App;
