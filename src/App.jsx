import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Player from './pages/Player';

function App() {
  return (
    <Router>
      <div className="App bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/player/:id" element={<Player />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
