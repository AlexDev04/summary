import React, {Component} from "react";
import Project from "./Project";

class Projects extends Component {
    render() {
        return(
            <div>
                <h2 className="header">
                    Проекты
                </h2>
                <div className="section" id="projects-div">
                    <Project name="Проект" img="imgs/Internature1.png">Это мой первый проект</Project>
                </div>

            </div>
        );
    }
}

export default Projects;