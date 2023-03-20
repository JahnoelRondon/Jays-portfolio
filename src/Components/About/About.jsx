import './about.css'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

function About(){
    return(
        <section className='aboutContainer' id='about'>
            <div className='aboutFlex'>
                <img src="https://i.imgur.com/PEUJU52.jpg" alt="pfp" width='260px' height='300px'/>
                <div className='textContainer'>
                    <h1 className='about'>ABOUT ME</h1>
                    <p>Hello World! I am a Creative and visually inspired developer who is driven to bring ideas to life. I bring a curious and tenacious mindset when taking on new challenges. My past experience as a retention specialist at a staffing agency for unemployed job seekers during covid helped me manage stressful situations and unrealistic expectations. I constantly find out of the box solutions that create interactive and seamless design centered applications that delight users and clients alike.</p>

                    <div className="aboutLinks">
                        <a className='resume' href="https://docs.google.com/document/d/18JU7FdDmWty8jtxZUm73Lq5ynXq_p0A-nRLmhvx3qho/edit?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
                        <a className="joblinks" href='https://www.linkedin.com/in/jahnoel-rondon/' target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a className="joblinks" href='https://github.com/JahnoelRondon' target="_blank" rel="noreferrer"><FaGithub /></a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About