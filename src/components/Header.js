
import { Link } from 'react-router-dom';
 

const Header = (props) => {
    return (
        <nav className="nav">
            {/* Links "to" a route */}
            <Link to="/">
                <div>People App</div>
            </Link>
        </nav>
    );
};
export default Header;