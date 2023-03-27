import './navbar.css';

// Router
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbarContainer">
      <div>
        <Link to={'/'}><img src="/assets/images/logo.png" alt="brand-logo" className="logo"/></Link>
      </div>
      <div className="linksContainer">
        <Link to={'/brand/Ducatti'} className="brandLink">Ducatti</Link>
        <Link to={'/brand/EGO'} className="brandLink">EGO</Link>
        <Link to={'/brand/Suzuki'} className="brandLink">Suzuki</Link>
        <Link to={'/brand/All'} className="brandLink">All</Link>
        <Link to={'/cart'}><img src="/assets/images/cart.png" alt="cart-logo" className="cartLogo"/></Link>
      </div>
    </div>
  );
};

export default NavBar;