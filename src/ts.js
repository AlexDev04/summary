import React, {Component} from "react";
import Warning from "./Warning";

class TS extends Component {
    render() {
        return(
            <div>
                <h2 className="header">
                    TypeScript
                </h2>
                <Warning>Данная страница находится в разработке</Warning>
            </div>
        );
    }
}

export default TS;