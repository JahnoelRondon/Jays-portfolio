import ImageVideo from "./ImageVideo";
import { projects } from "./data";
import "./projects.css";

function Projects() {

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
        {projects.map((obj, idx) => (
          <div className="projCard" key={idx}>
            <ImageVideo defaultImage={obj.img} video={obj.video} title={obj.title}/>
            <div className="projDetails">
              <p className="specText">
                <strong>Description</strong>
                <br></br>
                {obj.desc}
              </p>
              <p className="techs specText">
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
