import React from "react";
import projectData from '../projectData';
import ProjectCards from "../components/Project";
import '../App.css';
import '../styles/Portfolio.css';

function Portfolio() {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row bg-secondary">
                    <div className="col">
                        <div className="card bg-secondary">
                            <div className="card-body">
                                <div className="header">
                                    <h3 className="text-white">My Portfolio</h3>
                                </div>
                                <div className="modal-footer" />

                                <div className="grid-container">
                                    {projectData.map((project) => (
                                        <ProjectCards
                                            id={project.id}
                                            key={project.id}
                                            image={project.image}
                                            name={project.name}
                                            github={project.github}
                                            deploy={project.deploy}
                                         />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Portfolio;
