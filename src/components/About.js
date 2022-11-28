import React from "react";

function About() {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">

                            <div className="card-body">
                                <div className="row about-row">
                                    Image here
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="row">
                                    <p className="aboutMe">
                                        Hello World
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
