import React from "react";
import Me from '../assets/images/Me.jpg'

function About() {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card bg-dark">

                            <div className="card-body bg-dark">
                                <div className="row about-row">
                                    <img className="myImg" src={Me} alt="me"/>
                                </div>
                            </div>

                            <div className="card-body bg-dark text-white">
                                <div className="row">
                                    <p className="aboutMe">
                                        My Name is Henry Howe. As of writing this I am an entry-level 
                                        web-developer. Capable of making and working on full-stack web and 
                                        Mobile applications. I have a wide variety of skills, and am looking forward 
                                        to making a useful addition to a company in the very-near future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;
