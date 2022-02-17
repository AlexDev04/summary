import React, {Component} from "react";

class Node extends Component {
    render() {
        return(
            <div>
                <h2 className="header">
                    Node.js
                </h2>
                <div>
                    <h3>Как я использую Node</h3>
                    <p>На данный момент я использую Node.js исключительно для создания
                       и поддержки веб=сервера в коммандной строке или терминале.
                       Пока что эта платформа не нашла других применений в моем коде.</p>
                </div>
            </div>
        );
    }
}

export default Node;