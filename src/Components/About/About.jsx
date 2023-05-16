import './about.css'
import pfp from "../../assets/images/pfp.PNG"
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

function About(){
    return(
        <section className='aboutContainer' id='about'>
            <div className='aboutFlex'>
                <img src={pfp} alt="pfp"/>
                <div className='textContainer'>
                    <h1 className='about'>ABOUT ME</h1>
                    <p>👋 <strong style={{color: "#f44336"}}>Hello World!</strong> I am a Creative and visually inspired developer who is driven to build my ideas to life. I have 1+ years of experience working in a team for small to large government projects. Before my developing journey I was a retention specialist at a staffing agency helping unemployed job seekers during covid and learned how to manage stressful situations and unrealistic expectations. I constantly find out of the box solutions that create interactive and seamless design centered applications that delight users and clients alike. When I am not developing you can find me on the piano, playing video games, or working out. Which means you wont find me at all because all be doing all of this in my house. 😅</p>

                    <div className="aboutLinks">
                    <a className="joblinks" href='https://www.linkedin.com/in/jahnoel-rondon/' target="_blank" rel="noreferrer"><FaLinkedin /></a>

                        <a className='resume' href="https://docs.google.com/document/d/18JU7FdDmWty8jtxZUm73Lq5ynXq_p0A-nRLmhvx3qho/edit?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
                        <a className="joblinks" href='https://github.com/JahnoelRondon' target="_blank" rel="noreferrer"><FaGithub /></a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About