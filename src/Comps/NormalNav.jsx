import { Link } from 'react-router-dom';
import "../CompStyles/navigation.css";

const NormalNav = () => {
    return (
        <div id='normalNav'>
            <Link to="/" className='links' > Home </Link>
            <Link to="/dogList" className='links' > Dogs </Link>
            <Link to="/contact" className='links' > Contact </Link>
        </div>
    );
};

export default NormalNav;