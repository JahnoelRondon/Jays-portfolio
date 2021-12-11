import './projects.css'

function Projects(){

    let proj = [
        // add To do proj here
        {
            title: 'Marq', 
            desc: 'Marq is a organizational/list-making application. It has many features to keep track of your time management as well as planning. There are many todo apps however Marq tackles the list making apps from a different angle and seperates the different kind of simple notes a person might make. With Marq you have the utilities right out of the box however you still have the flexibility to choose what you do and how you organize yourself. This app was made using Django, Python, Bootstrap, Javascript, HTML and CSS.',
            img:'https://i.imgur.com/ryY4RLb.png',
            deployLink: 'https://p4marq.herokuapp.com/',
            ghubLink: 'https://github.com/JahnoelRondon/Marq-1'

        },

        {
            title: 'Travutan', 
            desc: 'Travutanrocketrocket is a web app that allows travelers to find everything they’re looking for about their next destination. Connecting travelers looking for help to find potential destinations, or simply browsing to know more about a specific destination.',
            img:'https://i.imgur.com/lvS01Bd.png',
            deployLink: null,
            ghubLink: 'https://github.com/lrmoon/travutan'

        },

        {
            title: 'Gnome Home', 
            desc: 'Gnome home is a place for us folk tale loving historians. Here you will find mythology throughout history from different pantheons and cultures and be able to review them. Fill your curiosity and Submit your interest. The project was built using Node.js/Express, Mongoose, MongoDB, GoogleoAuth, Passport, EJS templates, Javascript, CSS, HTML',
            img:'https://i.imgur.com/hJf8Jjg.png?2',
            deployLink: 'https://gnomehome.herokuapp.com/',
            ghubLink: 'https://github.com/JahnoelRondon/Gnome-Home'

        },

        {
            title: 'Creature Slayers', 
            desc: 'Creature Slayers is a Turn Based Web Browser game where you hunt down creatures for a bounty. The project was built using Pure JavaScript, DOM manipulation, Events, HTML, and CSS.',
            img:'https://i.imgur.com/ejxU7Jh.png',
            deployLink: 'https://youthful-goldwasser-877b0e.netlify.app/',
            ghubLink: 'https://github.com/JahnoelRondon/TurnBasedGame'

        },

    ]

    return (
        <section className='projectsWrapper' id='projects'>
          <h1 className='projTitle'>Projects</h1>  
          <div className='projFlex'>

              {
                  proj.map((obj, idx) => (
                    <div className='projCard' key={idx} >
                        <h3>{obj.title}</h3>
                        <img src={obj.img} alt='not valid'/>
                        <p>{obj.desc}</p>
                        {/* make links here and style them to look like buttons */}
                        <div className='projLinks'>
                            <a href={obj.deployLink ? obj.deployLink : "#"} alt='not valid' target="_blank" rel="noreferrer">{obj.deployLink ? "Deployed" : "Under"}</a>
                            <a href={obj.ghubLink} alt='not valid' target="_blank" rel="noreferrer">GitHub</a>                            
                        </div>
                    </div>
                  ))
              }

          </div>
        </section>
    )
}

export default Projects