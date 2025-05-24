import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
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

        <Routes>
          <Route path="/" element={<Header />} >
            <Route index element={<Home />} />/
            <Route path="settings" element={<Settings />} />
            <Route path="usage" element={<Usage />} />
            <Route path="users" >
              <Route index element={<Users />} />
              <Route path=":userId/*" element={<Details />} >
                <Route path='' index element={<Marks />} />
                <Route path='sports' element={<Sports />} />
                <Route path='remarks' element={<Remarks />} />
              </Route>
            </Route>

            <Route path="*" element={<h2>Oops Page Not Found</h2>} />
          </Route>


        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
