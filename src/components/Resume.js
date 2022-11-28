import React from "react";
import '../App.css';
import '../styles/Portfolio.css';

function Resume() {
    return(
        <React.Fragment>
            <div className="container bg-dark text-white">
                <div className="row">
                    <div className="col">
                        <div className="card bg-dark">
                            <h4>View Resume:
                            <a href="https://raw.githubusercontent.com/PropainAcessories/my-portfolio/master/src/assets/Resume.txt" className="text-white p-2">Henry Howe</a>
                            </h4>
                        </div>

                        <div className="modal-footer"/>

                        <div className="header">
                            <h4>Skills</h4>
                        </div>
                        <div className="modal-footer"/>

                        <div className="card-body">
                            <div className="row">
                                <div className="">Technologies:</div>
                                <ul>
                                    <li>Node.Js</li>
                                    <li>MySQL, MongoDB and GraphQL</li>
                                    <li>Express, Mongoose, Jest, and Inquirer</li>
                                    <li>Handlebars, Webpack, and React</li>
                                    <li> Bootstrap, tailwind, and bulma (Css).</li>
                                    <li>Understanding of full-stack web/mobile applications.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Resume;
