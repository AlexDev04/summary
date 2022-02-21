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
                    <Project name="Таблица пользователей" img="Internature1.png"
                             img2="Internature2.png">
                        Этот проект я выполнял как тестовое задание на стажировку
                        в Infotecs. Его суть - вывести из json файла список пользователей
                        в таблицу так, чтобы была возможность сортировать ее по
                        возрастанию, скрывать колонки, а также нужно было реализовать форму
                        редактирования содержимого каждой строки таблицы.
                    </Project>

                    <Project name="Боковое меню" img="Slide-menu.png"
                             img2="Slide-menu2.png">
                        В основе этого проекта лежит "чистый" React.js. В описании он не
                        нуждается, т.к. проект слишком простой, учебный.
                    </Project>

                    <Project name="Первый одностраничник на React" img="React-Router.png"
                             img2="React-Router2.png">
                        Мой первый одностраничный сверхдинамичный сайт на React. Работает
                        на базе библиотеки Router через изменение адреса в адресной строке
                        браузера. Благодаря встроенному в Router добавлению активной ссылке
                        класса "active" стилизация становится намного проще, чем на
                        чистом JS или React.
                    </Project>
                </div>

            </div>
        );
    }
}

export default Projects;