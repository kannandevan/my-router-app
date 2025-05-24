import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Usage from './pages/Usage';
import Users from './pages/Users';
import Details from './pages/Details';
import Header from './components/Header';
import Marks from './pages/Marks';
import Sports from './pages/Sports';
import Remarks from './pages/Remarks';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="settings" element={<Settings />} />
          <Route path="usage" element={<Usage />} />
          <Route path="users" element={<Users />} />
          <Route path="/" element={<Home />} />
          <Route path="details/:userId/*" element={<Details />} >
            <Route path='' element={<Marks />} />
            <Route path='sports' element={<Sports />} />
            <Route path='remarks' element={<Remarks />} />
          </Route>
          <Route path="*" element={<h2>Oops Page Not Found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
