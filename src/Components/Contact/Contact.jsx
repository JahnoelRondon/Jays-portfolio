import './contact.css'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'


function Contact(){
    return (
        <section className='contactSection' id='contact'>
            <h1>Contact Me</h1>    
            <p>Can't wait to hear from you!</p>
            <div className='contactsContainer'>
                <a href='https://www.linkedin.com/in/jahnoel-rondon/' target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href='https://github.com/JahnoelRondon' target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
        </section>
        
    )
}

export default Contact