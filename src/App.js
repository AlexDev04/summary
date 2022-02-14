import React, {Component} from "react";
import {
    Route,
    Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./home";
import HTML from "./html";
import CSS from "./css";
import JS from "./js";
import Reactjs from "./react";
import TS from "./ts";
import Node from "./node";
import PHP from "./php";
import Extra from "./extra";
import Projects from "./projects";
import Achievements from "./achievements";
import Plans from "./plans";

class App extends Component {
    render() {
        return(
            <>
                <HashRouter>
                    <div>
                        <h1 id="main-header">Мои навыки веб-разработки</h1>
                        <ul>
                            <li><NavLink to="/">Главная</NavLink></li>
                            <li><NavLink to="/html">HTML</NavLink></li>
                            <li><NavLink to="/css">CSS</NavLink></li>
                            <li><NavLink to="/js">JavaScript</NavLink></li>
                            <li><NavLink to="/react">React.js</NavLink></li>
                            <li><NavLink to="/ts">TypeScript</NavLink></li>
                            <li><NavLink to="/node">Node.js</NavLink></li>
                            <li><NavLink to="/php">PHP</NavLink></li>
                            <li><NavLink to="/extra">Дополнительные навыки</NavLink></li>
                            <li><NavLink to="/projects">Проекты</NavLink></li>
                            <li><NavLink to="achievements">Достижения</NavLink></li>
                            <li><NavLink to="/plans">Планы</NavLink></li>
                        </ul>
                        <div className="container">
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/html" element={<HTML/>}/>
                                <Route path="/css" element={<CSS/>}/>
                                <Route path="/js" element={<JS/>}/>
                                <Route path="/react" element={<Reactjs/>}/>
                                <Route path="/ts" element={<TS/>}/>
                                <Route path="/node" element={<Node/>}/>
                                <Route path="/php" element={<PHP/>}/>
                                <Route path="/extra" element={<Extra/>}/>
                                <Route path="/projects" element={<Projects/>}/>
                                <Route path="/achievements" element={<Achievements/>}/>
                                <Route path="/plans" element={<Plans/>}/>
                            </Routes>
                        </div>
                    </div>
                </HashRouter>
                <div id="footer">
                    Footer
                </div>
            </>

        );
    }
}

export default App;