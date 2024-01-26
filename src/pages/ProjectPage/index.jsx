import data from "../ProjectPage/projects.json";
import Project from "./Project";

function ProjectPage(){

    return(
        <>
            <MainNavigationBar />
            <p>function ProjectPage</p>
            <p>
                This page is going to be my project age. Future Rovi, make
                sure to fill this in later. If anyone else sees this -- uh oh!
            </p>
            {
                data.projects.map(
                    project => 
                    <Project 
                        name={project.name}
                        description={project.description}
                        tags={project.tags}
                        link={project.link}
                    />
                )
            }
        </>
    )
}

export default ProjectPage;