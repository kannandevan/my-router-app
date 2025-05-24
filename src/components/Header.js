
import { BrowserRouter, Routes, Route, NavLink, Outlet} from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
       <div>
         <header className="header">

<NavLink to="/"><span>Home</span></NavLink>
<NavLink to="/users"><span>Users</span></NavLink>
<NavLink to="/settings"><span>Settings</span></NavLink>
<NavLink to="/usage"><span>Usage</span></NavLink>

</header>
<div><Outlet/></div>
       </div>
    );
}
export default Header;