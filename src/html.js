import React, {Component} from "react";

class HTML extends Component {
    render() {
        return(
            <div>
                <h2 className="header">
                    HTML
                </h2>

                <div className="section">
                    <h3>Навыки верстки</h3>
                    <p>Мало что можно сказать о верстке HTML, ведь даже знание последних
                       новых тегов ничего мне не даст по сравнению с практическим
                       опытом верстки, который у меня имеется. Я неплохо разбираюсь
                       в кроссбраузерной верстке, а также могу сделать адаптивный сайт,
                       меняющий "сетку" в зависимости от размера экрана пользователя.</p>
                </div>

                <div className="section">
                    <h3>Как я учился верстать</h3>
                    <p>Обучался верстке HTML я с самого начала, когда только начал проходить
                       свой первый курс. Конечно же, в последствии мне приходилось
                       изучать какие-то моменты более подробно, чтобы заполнить пробелы,
                       но основную часть HTML я изучал в начале пути. Также я проходил
                       небольшой курс по SEO, который стоит отнести именно к HTML, так как
                       в нем рассказывались основные тонкости при ранжировании сайтов
                       поисковой системой по критериям правильности верстки - например,
                       наличия атрибута lang тега html.</p>
                </div>

                <div className="section">
                    <h3>Самые главные навыки в HTML</h3>
                    <p>Самым главным навыком по моему мнению считается умение правильно
                       разбить информацию на порции и при этом не занять лишних строчек
                       и понимание назначения специальных тегов кода.
                       Если рассмотреть какие-либо другие критерии, более конкретные,
                       - то это знание основных стандартов SEO, знание с какими тегами
                       какой браузер "не дружит" и тому подобное</p>
                </div>
            </div>
        );
    }
}

export default HTML;