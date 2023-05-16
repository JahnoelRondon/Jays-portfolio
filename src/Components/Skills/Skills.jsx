import "./skills.css";
import { FaServer } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { ImPaintFormat } from "react-icons/im";

const SkillInfoData = [
    {
        title: "Frontend",
        summary:
            "I love to wonder, and enjoy bringing my imaginations and ideas to life on the screen.",
        tools: "React ~ Material UI ~ CSS3 ~ Javascript ~ Responsive Design ~ HTML ~ Flex Box/Grid ~ Bootstrap ~ WireFraming",
        icon: <ImPaintFormat />,
    },
    {
        title: "Backend",
        summary:
            "I value the ability that allows the manipulation of data as it moves back and forth between the user and the server. ",
        tools: "MongoDB ~ Mongoose ~ Django ~ Python ~ SQL ~ Sequelize ~ PostgreSQL ~ MySQL ~ Express.js ~ Node.js ~ RESTful API",
        icon: <FaServer />,
    },
    {
        title: "Development",
        summary:
            "I genuinely enjoy expanding my creativity when it comes to developing not only the web, but creating/editing videos and video games.",
        tools: "Github ~ Git ~ AWS S3 ~ Heroku ~ Netlify ~ Railway ~ Appian ~ C# ~ Unity",
        icon: <FaTools />,
    },
];

function Skills() {
    return (
        <section className="skillSection" id="skills">
            <div className="skillsContainer">
                {SkillInfoData &&
                    SkillInfoData.map((skill) => (
                        <div className="skillCard">
                            <div className="skillIcon">{skill.icon}</div>
                            <h4>{skill.title}</h4>
                            <p>{skill.summary}</p>
                            <p className="skillInfo">Tools:</p>
                            <p>{skill.tools}</p>
                        </div>
                    ))}
            </div>
        </section>
    );
}

export default Skills;
