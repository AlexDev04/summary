import React, {Component} from "react";

class Warning extends Component {
    render() {
        return(
          <div className="warning">
              <img className="warning-img" src="warning.png"></img>
              <p>{this.props.children}</p>
              <img className="warning-img" src="warning.png"></img>
          </div>
        );
    }
}

export default Warning;