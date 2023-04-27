import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="Header">
            <span>Router Tutorial</span>
            <Link to="/" className="menu-item">
                Home
            </Link>
            <Link to="/products" className="menu-item">
                Products
            </Link>
        </header>
    );
};

export default Header;
