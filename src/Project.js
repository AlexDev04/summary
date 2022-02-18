import React, {Component} from "react";

class Project extends Component {
    render() {
        return(
            <div className="project-div">
                <h3>{this.props.name}</h3>
                <figure>
                    <img src={this.props.img}></img>
                    <figcaption>{this.props.children}</figcaption>
                </figure>
            </div>
        );
    }
}

export default Project;