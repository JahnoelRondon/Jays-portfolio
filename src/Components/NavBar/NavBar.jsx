import './navbar.css';
import {HashLink} from 'react-router-hash-link';

// create on click functions on nav bar items to scroll down to certain positions, saga gallery example

function NavBar(){
    return (
        <nav>
            <HashLink className='title' smooth to="#top">JR</HashLink>
            <div className="interactContainer">
                <HashLink smooth to="#about">About Me</HashLink>
                <HashLink smooth to="#skills">Skills</HashLink>
                <HashLink smooth to="#projects">Projects</HashLink>
                <HashLink smooth to="#contact">Contact me</HashLink>           
            </div>
        </nav>
    )
}

export default NavBar