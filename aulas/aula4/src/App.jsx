import { Routes } from 'react-router';
import About from './pages/About';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Settings from './pages/Settings';

function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/perfil" element={<Perfil />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
}

export default App;