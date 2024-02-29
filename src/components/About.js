import React from "react";
import Me from '../assets/images/Me.jpg'

function About() {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card bg-dark">

                            <div className="card-header about-row bg-dark">
                                <img className="myImg" src={Me} alt="me"/>
                            </div>

                            <div className="card-body bg-dark text-white">
                                <div className="row">
                                    <p className="aboutMe">
                                        My Name is Henry Howe. I currently build, repair and maintain websites. Currently taking clients
                                        and customers. I have experience with a wide array of languages and frameworks. I 
                                        enjoy learning more about older and newer technologies alike. I am also open to new customers and clients.
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
