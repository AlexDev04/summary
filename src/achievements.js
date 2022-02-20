import React, {Component} from "react";
import Achieve from "./Achieve";

class Achievements extends Component {
    render() {
        return(
            <div>
                <h2 className="header">
                    Достижения
                </h2>
                <Achieve img="">Сертификат</Achieve>
            </div>
        );
    }
}

export default Achievements;