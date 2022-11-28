import React from "react";
import '../App.css';
import '../styles/Portfolio.css';

function ProjectCards(props) {
    return (
        < div className={`grid-item gallery__item--${props.id}`}>
            <img src={props.image} alt={props.name}
            className="gallery__img"/>
            <div className="desc">
                <h4>{props.name}</h4>
            </div>

            <div className="links">
                <a href={props.github} target="_blank"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github Repo" id="project-icon"/>Github Repo</a>
                <a href={props.deploy} target="_blank"><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Application" id="project-icon"/>Deployed App</a>
            </div>
        </div>
    );
}

export default ProjectCards;
