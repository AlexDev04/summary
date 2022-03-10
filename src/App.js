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
                    <div id="in-content">
                        <h1 id="main-header">Мои навыки веб-разработки</h1>
                        <div id="nav-container">
                                <NavLink className="nav-item" to="/">Главная</NavLink>
                                <NavLink className="nav-item" to="/html">HTML</NavLink>
                                <NavLink className="nav-item" to="/css">CSS</NavLink>
                                <NavLink className="nav-item" to="/js">JavaScript</NavLink>
                                <NavLink className="nav-item" to="/react">React.js</NavLink>
                                <NavLink className="nav-item" to="/ts">TypeScript</NavLink>
                                <NavLink className="nav-item" to="/node">Node.js</NavLink>
                                <NavLink className="nav-item" to="/php">PHP</NavLink>
                                <NavLink className="nav-item" to="/extra">Доп. навыки</NavLink>
                                <NavLink className="nav-item" to="/projects">Проекты</NavLink>
                                <NavLink className="nav-item" to="achievements">Достижения</NavLink>
                                <NavLink className="nav-item" to="/plans">Планы</NavLink>
                        </div>
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
                    <h3>Контакты:</h3>
                    <ul>
                        <li><a href="mailto:web.yakovlev04@yandex.ru">web.yakovlev04@yandex.ru</a></li>
                        <li><a href="tel:+7-911-152-40-72">+7-911-152-40-72</a></li>
                    </ul>
                    <div id="contact-links">
                        <a href="https://www.instagram.com/alexdev04/"><img src="ig-logo.png"/></a>
                        <a href="https://github.com/AlexDev04"><img src="github-logo.png"/></a>
                    </div>
                </div>
            </>
        );
    }
}

export default App;