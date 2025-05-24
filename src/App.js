import './App.css';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Usage from './pages/Usage';
import Users from './pages/Users';
import Details from './pages/Details';
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>

        <Routes>
          <Route path="settings" element={<Settings />} />
          <Route path="usage" element={<Usage />} />
          <Route path="users" element={<Users />} />
          <Route path="/" element={<Home />} />
          <Route path="/details/:userId" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
