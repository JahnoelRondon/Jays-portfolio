import './projects.css'

function Projects(){

    let proj = [
        {title: 'myth', desc: 'its the myth thing'},
        {title: 'avatar', desc: 'blue things'},
        {title: 'amazon', desc: 'but them thangs'},
        {title: 'booo', desc: 'scary businesss'}
    ]

    console.log(proj)

    return (
        <section className='projectsWrapper'>
          <h1 className='projTitle'>Projects</h1>  
          <div className='projFlex'>
              {/* map here */}

              {
                  proj.map((obj, idx) => (
                    <div className='projCard' key={idx} >
                        <h3>{obj.title}</h3>
                        <p>{obj.desc}</p>
                    </div>
                  ))
              }

          </div>
        </section>
    )
}

export default Projects