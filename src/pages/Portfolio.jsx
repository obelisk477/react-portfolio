import projects from '../projectData.json'
import Project from '../components/Project';

export default function Portfolio() {

    console.log(projects)

    return (
      <>
        <h1>Portfolio</h1>
        <div id="projects-container" className='d-flex flex-wrap justify-content-evenly'>
          {projects.map((project) => {
            return <Project key={project.title} title= {project.title} deployedLink={project.deployedLink} gitHub={project.gitHubLink} imagePath={project.imagePath} />
          })}
        </div>
      </>
    );
  }
  