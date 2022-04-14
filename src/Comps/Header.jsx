import { Link } from 'react-router-dom'
import "../CompStyles/header.css"

const Header = () => {
    return (
        <div id="header">
            <nav>
                <Link to="/" > Home </Link>

                <Link to="/dogList" > Dogs </Link>

                <Link to="/dogList" > Contact </Link>
            </nav>
        </div>
    );
};

export default Header;