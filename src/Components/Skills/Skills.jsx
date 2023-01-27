import './skills.css'

function Skills(){
    return (
        <section className='skillSection' id='skills'>
            <h2 className='skillsTitle'>Technical Skills</h2>
            
            <div className='skillsContainer'>
                <div className='skillCard'>
                    <h4>Front-end</h4>
                    <p>React ~ Material UI ~ CSS3 ~ Javascript ~ DOM Manipulation ~ Responsive Design ~ HTML ~ Flex Box/Grid ~ Bootstrap</p>
                </div>

                <div className='skillCard'>
                    <h4>Back-end</h4>
                    <p>MongoDB ~ NodeJS ~ Express ~ Mongoose ~ Django ~ Python ~ RESTful API ~ Fetch ~ SQL ~ PostgreSQL ~ MySQL</p>
                </div>

                <div className='skillCard'>
                    <h4>Other</h4>
                    <p>Github ~ Git ~ Heroku ~ Netlify ~ Railway ~ Appian ~ C# ~ Unity ~ WireFraming</p>
                </div>
            </div>
        </section>
    )
}

export default Skills