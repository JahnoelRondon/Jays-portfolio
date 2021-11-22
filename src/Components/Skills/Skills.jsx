import './skills.css'

function Skills(){
    return (
        <section className='skillSection'>
            <h2 className='skillsTitle'>Technical Skills</h2>
            <div className='skillsContainer'>
                <div className='skillCard'>
                    <h4>Front-end</h4>
                    <p>ReactJS - CSS3 - Javascript - DOM Manipulation - Responsive Design - HTML - Flex Box - CSS Grid</p>
                </div>

                <div className='skillCard'>
                    <h4>Back-end</h4>
                    <p>MongoDB - NodeJS - Express - Mongoose - Django - Python - RESTful API - Fetch - SQL - PostgreSQL</p>
                </div>

                <div className='skillCard'>
                    <h4>Other</h4>
                    <p>Github - Git - Heroku - OOP - Netlify - C# - Unity - Whimsicle - ERD charts</p>
                </div>
            </div>
        </section>
    )
}

export default Skills