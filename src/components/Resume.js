import React from "react";
import '../App.css';
import '../styles/Portfolio.css';

function Resume() {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <h4>View Resume
                            <a href="https://raw.githubusercontent.com/PropainAcessories/my-portfolio/master/src/assets/Resume.txt">Henry Howe</a>
                            </h4>
                        </div>

                        <div className="modal-footer"/>

                        <div className="header">
                            <h4>Skills</h4>
                        </div>
                        <div className="modal-footer"/>

                        <div className="card-body">
                            <div className="row">
                                <div className="">Technologies</div>
                                <p>
                                Node.js, MySQL, MongoDB, GraphQL, Express, Jest, Mongoose, Inquirer,
                                 Handlebars, React, Webpack, Bootstrap, tailwind, bulma (Css).
                                 Understanding of full-stack web/mobile applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Resume;
