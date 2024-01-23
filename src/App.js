import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CharacterList from './components/Character/CharacterList';
import Navbar from './components/Nav/Navbar';
import EpisodeList from './components/Episode/EpisodeList';
import CharacterDetails from './components/Character-Details/CharacterDetails';
import Home from './components/Home';
import Favorite from './components/Favorite/Favorite';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/episode' element={<EpisodeList/>} />
      <Route path='/favorite' element={<Favorite/>} />
      <Route path='/episode/:id' element={<CharacterList/>} />
      <Route path='/character/:id' element={<CharacterDetails/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
