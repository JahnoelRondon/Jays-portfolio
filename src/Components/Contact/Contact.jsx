import './contact.css'

function Contact(){
    return (
        <section className='contactSection' id='contact'>
            <h1>Contact Me</h1>    
            <p>Click one of the links to get in touch!</p>
            <div className='contactsContainer'>
                <a href='https://www.linkedin.com/in/jahnoel-rondon/' target="_blank" rel="noreferrer">Linkedin</a>
                <a href='https://github.com/JahnoelRondon' target="_blank" rel="noreferrer">GitHub</a>
            </div>
        </section>
        
    )
}

export default Contact