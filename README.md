# TestTask-1

## Назначение

Тестовое задание для отбора на Frontend Dev Offline Course от Napoleon IT School. Февраль 2020.

## Исходные данные для разработки

Разработайте страницу "О себе"

Требования:

- На странице присутствует подробная информация о вас
- Наличие кнопки "Показать телефон"
- Присутствует массив со строками. Функция ['мама', 'папа', 'брат'] => ['ма', 'па', 'брат']
- Результат размещён на GitHub

## Краткое описание

Проект представляет собой одностраничный web-сайт с информацией об авторе и утилитой для удаления повторяющихся символов в массиве строк.

## Актуальная версия

 - Версия: [v1.0.0](https://github.com/jasper7466/TestTask-1/tree/v1.0.0)
 - Ссылка на web-станицу: https://jasper7466.github.io/TestTask-1/

## Как развернуть проект

Проект собирается с помощью статического модульноного сборщика Webpack.

Установка плагинов осуществляется через [Node Package Manager (NPM)](https://nodejs.org/en/download/).

Версии пакетов и их зависимостей зафиксированы в файлах `package.json` и `npm-shrinkwrap.json`, поэтому для автоматической установки достаточно выполнить команду `npm install` в корневой директории проекта.

В конфигурационном файле настроены три варианта запуска сборки проекта:

 - `build` - для компиляции. Проект собирается локально, продукты сборки сохряняются в указанной директории (в моём случае это "./dist").
 - `dev` - для отладки. Помимо сборки, запускает на локальном сервере с автоматической "горячей" перезагрузкой при детектировании изменений в исходных кодах.
 - `deploy` - для релиза. Выкладывает "релизную" версию в ветку "gh-pages" указанного репозитория.

## Технологии

 - HTML
 - JS
 - CSS
 - Git
 - RegExp
 - Webpack