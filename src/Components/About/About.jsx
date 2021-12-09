import './about.css'

function About(){
    return(
        <section className='aboutContainer' id='about'>
            <div className='aboutFlex'>
                <img src="https://i.imgur.com/PEUJU52.jpg" alt="pfp" width='240px' height='300px'/>
                <div className='textContainer'>
                    <h3>About Me</h3>
                    <p>Creative and visually inspired developer who is driven to bring ideas to life. I bring a curious and tenacious mindset when learning and taking on new challenges. My past experience as a retention specialist at a staffing agency for unemployed job seekers during covid helped me manage stressful situations and unrealistic expectations. I constantly find out of the box solutions that create interactive and seamless design centered applications that delight users and clients alike.</p>                              
                </div>
            </div>
        </section>
    )
}

export default About