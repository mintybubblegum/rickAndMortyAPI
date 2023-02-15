import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllCharacters from './components/AllCharacters';
import OneCharacter from './components/OneCharacter';
import Logo from './RickandMortyLogo.png'

function App() {
  return (
    <div className="App">
      <img src={Logo} alt='Rick and Morty Logo' className='logo'/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<AllCharacters/>}></Route>
          <Route path='/character/:id' element= {<OneCharacter/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
