import React, {Component} from "react";

class Project extends Component {
    render() {
        return(
            <div className="project-div">
                <h3>{this.props.name}</h3>
                <figure>
                    <div className="imgs-div">
                        <img src={this.props.img}></img>
                        <img src={this.props.img2}></img>
                    </div>
                    <figcaption>{this.props.children}</figcaption>
                </figure>
            </div>
        );
    }
}

export default Project;