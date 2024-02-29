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
                            <h4 className="text-white">Download Resume:
                            <a href="https://github.com/PropainAcessories/my-portfolio/raw/master/src/assets/Resume-Henry-Howe.pdf" className="text-white p-2">Henry Howe</a>
                            </h4>
                        </div>

                        <div className="modal-footer"/>
                        
                        <div className="header">
                            <h4>Experience:</h4>
                        </div>

                        <div className="modal-footer"/>

                        <div className="card-body2">
                            <div className="row">
                                <p>
                                    I have been a freelance web developer for over a year. I have experience with on premises servers
                                    as well as cloud deployments. I have worked on websites of varying size and complexity, both adding features
                                    to existing websites as well as building new ones from scratch. I am also in search of employment and have skills 
                                    outside of web development.
                                </p>
                            </div>
                        </div>

                        <div className="header">
                            <h4>Skills</h4>
                        </div>
                        <div className="modal-footer"/>

                        <div className="card-body2">
                            <div className="row">
                                <div className="">Technologies:</div>
                                <ul className="skillList">
                                    <li>Cloud environments.</li>
                                    <li>Machine Learning</li>
                                    <li>Pandas, NumPy, SciKit</li>
                                    <li>C++/Python/R</li>
                                    <li>Node.Js and Apache</li>
                                    <li>Relational and NoSQL databases</li>
                                    <li>Test Driven Development</li>
                                    <li>JavaScript UI frameworks(React, Angular, Vue)</li>
                                    <li>Linux Server</li>
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
