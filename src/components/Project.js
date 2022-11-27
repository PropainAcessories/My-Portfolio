import React from "react";
import '../App.css';
// import '../portfolio.css';

function ProjectCards(props) {
    return (
        < div className={`grid-item gallery__item--${props.id}`}>
            <img src={props.image} alt={props.name}
            className="gallery__img"/>
            <div className="desc">
                <h4>{props.name}</h4>
            </div>

            <div className="links">
                <a href={props.github} target="_blank">Github Repo</a>
                <a href={props.deploy} target="_blank">Deployed App</a>
            </div>
        </div>
    );
}

export default ProjectCards;
