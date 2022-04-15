import NormalNav from './NormalNav';
import MobileNav from './MobileNav';
import "../CompStyles/header.css";

const Header = () => {
    return (
        <div id="header">
            <nav id='linkContainer'>
                <NormalNav />
                <MobileNav />
            </nav>
        </div>
    );
};

export default Header;