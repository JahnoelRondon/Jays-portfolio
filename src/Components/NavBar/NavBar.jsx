import './navbar.css';
// create on click functions on nav bar items to scroll down to certain positions, saga gallery example

function NavBar(){
    return (
        <nav>
            <h1>JR</h1>

            <div className="interactContainer">
                <p>About me</p>
                <p>Skills</p>
                <p>Projects</p>
                <p>Contact me</p>                
            </div>


        </nav>
    )
}

export default NavBar