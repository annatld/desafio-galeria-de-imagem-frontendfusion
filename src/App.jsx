import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Fav from './pages/Fav';
import Navbar from './components/Navbar';
import { FavProvider } from './context/FavContext';
import './App.css';

function App() {
  return (
    <FavProvider> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Fav />} />
        </Routes>
      </BrowserRouter>
    </FavProvider>
  );
}

export default App;
