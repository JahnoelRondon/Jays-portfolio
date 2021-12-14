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

            <form action="https://formsubmit.co/jahnoelrondon03@gmail.com" method="POST" id='usrform' autocomplete="off" className='contactFlex'>

                <input type="hidden" name="_subject" value="Email From Portfolio!" />
                <input type="email" name="email" placeholder='Your email' required/>
                <textarea rows="4" cols="50" name="message" placeholder='Write your message here' required form="usrform"/>
                <button type="submit">Send</button>

            </form>

        </section>
        
    )
}

export default Contact