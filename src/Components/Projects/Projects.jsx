import "./projects.css";

function Projects() {
  let proj = [
    {
      title: "Giph Ground",
      desc: 'Inspired by Giphy and Reacts project example "Snap Shot" Giph Ground was made for us meme lovers. Get your Giph on and start searching! You can see Giphys top trending memes that change daily, or view by categories in the app.',
      tech: "React, Styled Component, Javascript, Bootstrap, Giphy API, React Router v6, HTML",
      img: "https://i.imgur.com/z72t2MK.png?1",
      deployLink: "https://giphground.netlify.app/",
      ghubLink: "https://github.com/JahnoelRondon/GiphGround",
    },
    {
      title: "Totally Tarot",
      desc: "This website is to help you learn and discover the meaning behind the classic tarot cards. You can go and instantly find the cards with no hassle through a filtered search as well as by category. No long boring paragraph of Lore and history, simply just cards and their meanings.",
      tech: "React, CSS, Javascript, Typescript, React Router v6",
      img: "https://i.imgur.com/ojl0kkF.png",
      deployLink: "https://totallytarot.netlify.app/",
      ghubLink: "https://github.com/JahnoelRondon/tarot",
    },
    {
      title: "Marq",
      desc: "Marq is a organizational/list-making application. It has many features to keep track of your time management as well as planning. There are many todo apps however Marq tackles the list making apps from a different angle and seperates the different kind of simple notes a person might make. With Marq you have the utilities right out of the box however you still have the flexibility to choose what you do and how you organize yourself.",
      tech: "Django, Python, PostgreSQL, Bootstrap, Javascript, HTML and CSS",
      img: "https://i.imgur.com/ryY4RLb.png",
      deployLink: null,
      ghubLink: "https://github.com/JahnoelRondon/Marq-1",
    },
    {
      title: "MovieMoose",
      desc: "MovieMoose is a movie watchlist app where you can search a movie title, see top results, and add them to a watchlist as well as delete them from the watchlist.",
      tech: "React, Material UI, Javascript, TMDB API, HTML and CSS",
      img: "https://i.imgur.com/Rc6Hp11.png",
      deployLink: "https://relaxed-golick-f575a4.netlify.app",
      ghubLink: "https://github.com/JahnoelRondon/MovieMoose",
    },
    {
      title: "Gnome Home",
      desc: "Gnome home is a place for us folk tale loving historians. Here you will find mythology throughout history from different pantheons and cultures and be able to review them. Fill your curiosity and Submit your interest.",
      tech: "Node.js, Express, Mongoose, MongoDB, GoogleoAuth, Passport, EJS templates, Javascript, CSS, HTML",
      img: "https://i.imgur.com/hJf8Jjg.png?2",
      deployLink: "https://gnome-home-production.up.railway.app/",
      ghubLink: "https://github.com/JahnoelRondon/Gnome-Home",
    },
    {
      title: "Travutan",
      desc: "Travutanrocketrocket is a web app that allows travelers to find everything they’re looking for about their next destination. Connecting travelers looking for help to find potential destinations, or simply browsing to know more about a specific destination.",
      tech: "RoadGoat API, React, Node.js, Express, MongoDB, Javascript, HTML, CSS",
      img: "https://i.imgur.com/lvS01Bd.png",
      deployLink: null,
      ghubLink: "https://github.com/lrmoon/travutan",
    },
    {
      title: "Creature Slayers",
      desc: "Creature Slayers is a Turn Based Web Browser game where you hunt down creatures for a bounty. The game was heavily inspired by hearthstone, wizard101, and magic the gathering.",
      tech: "Javascript, DOM manipulation & event listeners, HTML, CSS",
      img: "https://i.imgur.com/ejxU7Jh.png",
      deployLink: "https://youthful-goldwasser-877b0e.netlify.app/",
      ghubLink: "https://github.com/JahnoelRondon/TurnBasedGame",
    },
  ];

  return (
    <section className="projectsWrapper" id="projects">
      <h1 className="projTitle">My Projects</h1>
      <p style={{ textAlign: "center", fontSize: "0.6em" }}>
        Here are a few past projects I've worked on. Want to see more?{" "}
        <a
          href="mailto:jahnoelrondon03@gmail.com"
          style={{ textDecoration: "none" }}
        >
          Email Me.
        </a>
      </p>
      <div className="projFlex">
        {proj.map((obj, idx) => (
          <div className="projCard" key={idx}>
            <img src={obj.img} alt="not valid" />
            <div className="projDetails">
              {/* <p>
                <strong>Description</strong>
                <br></br>
                {obj.desc}
              </p> */}
              <p className="techs">
                <strong>Technologies</strong>
                <br></br>
                {obj.tech}
              </p>

              <div className="projLinks">
                <a
                  href={obj.ghubLink}
                  alt="not valid"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Repo
                </a>
                {obj.deployLink ? (
                  <a
                    href={obj.deployLink}
                    alt="not valid"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live App
                  </a>
                ) : (
                  <p>Maintenance</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
