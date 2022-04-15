import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import "../CompStyles/navigation.css";

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    const openIcon = <AiOutlineMenu className='hamburger' size='40px' onClick={
        () => { setOpen(!open) }
    } />
    const closeIcon = <AiOutlineClose className='hamburger' size='40px' onClick={
        () => { setOpen(!open) }
    } />

    return (
        <section id='mobileNav'>
            {open ? closeIcon : openIcon}
            {open && <div id='mobileLinkContainer'>
                <Link to="/" className='links' > Home </Link>
                <Link to="/dogList" className='links' > Dogs </Link>
                <Link to="/dogList" className='links' > Contact </Link>
            </div>}
        </section>
    );
};

export default MobileNav;