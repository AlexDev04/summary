import React, {Component} from "react";

class Achieve extends Component{
    render() {
        return(
            <figure className="achieve">
                <img src={this.props.img}></img>
                <figcaption>{this.props.children}</figcaption>
            </figure>
        );
    }
}

export default Achieve;