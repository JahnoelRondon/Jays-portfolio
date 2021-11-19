import './about.css'

function About(){
    return(
        <section className='aboutContainer'>
            <div className='aboutFlex'>
                <img src="https://i.imgur.com/PEUJU52.jpg" alt="pfp" width='240px' height='300px'/>
                <div className='textContainer'>
                    <h3>About Me</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, enim nam nisi dolores odio unde dicta ab modi ipsum magni ad autem consequuntur minus quasi, nesciunt doloribus, omnis ex deserunt.</p>                              
                </div>
            </div>
        </section>
    )
}

export default About