import './contact.css'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import { BsFillFileEarmarkTextFill } from 'react-icons/bs'


function Contact(){
    return (
        <section className='contactSection' id='contact'>
            <h1>Contact Me</h1>    
            <p>Can't wait to hear from you!</p>
            <div className='contactsContainer'>
                <a href='https://www.linkedin.com/in/jahnoel-rondon/' target="_blank" rel="noreferrer" className='tooltip'><FaLinkedin /><span class="tooltiptext">Linkedin</span></a>
                <a href='https://github.com/JahnoelRondon' target="_blank" rel="noreferrer" class="tooltip"><FaGithub /><span class="tooltiptext">GitHub</span></a>
                <a href='https://docs.google.com/document/d/18JU7FdDmWty8jtxZUm73Lq5ynXq_p0A-nRLmhvx3qho/edit?usp=sharing' target="_blank" rel="noreferrer" className='tooltip'><BsFillFileEarmarkTextFill /><span class="tooltiptext">Resume</span></a>
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