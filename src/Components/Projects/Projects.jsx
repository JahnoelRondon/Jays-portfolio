import './projects.css'

function Projects(){

    let proj = [

        {
            title: 'Gnome Home', 
            desc: 'Gnome home is a place for us folk tale loving historians. Here you will find mythology throughout history from different pantheons and cultures and be able to review them. Fill your curiosity and Submit your interest. The project was built using Node.js/Express, Mongoose, MongoDB, GoogleoAuth, Passport, EJS templates, Javascript, CSS, HTML',
            img:'https://i.imgur.com/O9SD9RJ.png',
            deployLink: 'https://gnomehome.herokuapp.com/',
            ghubLink: 'https://github.com/JahnoelRondon/Gnome-Home'

        },

        {
            title: 'Creature Slayers', 
            desc: 'Creature Slayers is a Turn Based Web Browser game where you hunt down creatures for a bounty. The project was built using Pure JavaScript, DOM manipulation, Events, HTML, and CSS.',
            img:'https://raw.githubusercontent.com/JahnoelRondon/TurnBasedGame/main/imgs/CreatureSlayersTitle.png',
            deployLink: 'https://youthful-goldwasser-877b0e.netlify.app/',
            ghubLink: 'https://github.com/JahnoelRondon/TurnBasedGame'

        },

    ]

    return (
        <section className='projectsWrapper'>
          <h1 className='projTitle'>Projects</h1>  
          <div className='projFlex'>
              {/* map here */}

              {
                  proj.map((obj, idx) => (
                    <div className='projCard' key={idx} >
                        <h3>{obj.title}</h3>
                        <img src={obj.img} alt='not valid'/>
                        <p>{obj.desc}</p>
                        {/* make links here and style them to look like buttons */}
                        <div className='projLinks'>
                            <a href={obj.deployLink} alt='not valid'>Deployed</a>
                            <a href={obj.ghubLink} alt='not valid'>GitHub</a>                            
                        </div>
                    </div>
                  ))
              }

          </div>
        </section>
    )
}

export default Projects