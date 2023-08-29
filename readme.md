<h1>Проект 1win</h1>

<p>Страницы свёрстаны с помощью сборщика Gulp. Перед использованием прочтите инструкцию.</p>

<h2>Использование сборщика Gulp</h2>

<h3>Обязательные действия перед использованием!</h3>
<p>Перед запуском нужно установить следующие программы:</p>
<a href="https://nodejs.org/en">NodeJS</a> - выбрать последнюю версию
<p>В папке проекта выполните команду (с помощью CMD, PowerShell или любого другого терминала):</p>
<pre>npm i</pre>
<p>Далее установим Gulp глобально:</p>
<pre>npm i gulp -g</pre>


<h3>Основные команды</h3>
<p>Запуск Gulp (запустится сервер, который откроет локальную страницу и будет синхронизировать её, так же много других автоматизаций):</p>
<pre>gulp</pre>
<p id="build">Создание билда для продакшн (находится в папке "dist"):</p>
<pre>gulp build</pre>
<p><a href="#deploy">Деплой (загрузка вёрстки на хостинг)</a>:</p>
<pre>gulp deploy</pre>

<h2>Файлы для редактирования</h2>
<h3>Как редактировать HTML?</h3>
<p>HTML разделён на разны компоненты, которые находятся по пути:</p>
<pre>app/parts</pre>
<p>Они встраиваются в корневых файлах, которые вы видите папке "app".</p>
<p>Но так как бессмысленно создавать кучу компонентов в вёрстке, чтобы отвечать за каждый компонент как в CMS, я для примера скопировал файлы в папку <b>"production"</b>, которая никак не трогается Gulp'ом. После <a href="#build">билда</a> тут можно спокойно менять текст. А если требуется заменить стили - просто копируем в папку <b>"app/css"</b> этот файл:</p>
<pre>dist/css/app.min.css</pre>
<h3>Как редактировать изображения?</h3>
<p>Часть изображений встраивается в компоненты как переменная. В корневых файлах есть комментарии, которые помогут сориентироваться.</p>
<h3>Как добавлять новые изображения?</h3>
<p>Они добавляются в папке:</p>
<pre>app/images/src</pre>
<p>После этого они сжимаются и копируются в соседнюю папку:</p>
<pre>app/images/dist</pre>
<h3>Где находится CSS?</h3>
<p>Главный CSS в проекте написан через предпроцессор Sass, находится в пути:</p>
<pre>app/styles/sass/main.sass</pre>
<p>Рядом с ним находится конфиг с переменными:</p>
<pre>app/styles/sass/_config.sass</pre>
<h3>Где находится JS?</h3>
<p>JS находится по пути:</p>
<pre>app/js/app.js</pre>

<h2 id="deploy">Деплой (загрузка на хостинг)</h2>
<h3>Лёгкий способ</h3>
<p>Скопируйте содержимое папки "dist" на хостинг.</p>
<h3>Посложнее (для автоматизации)</h3>
<p>В корневом файле gulpfile.js, строке 124 есть функция:</p>
<pre>
    function deploy() {
        return src('dist/')
            .pipe(rsync({
                root: 'dist/',
                hostname: 'username@yousite.com',
                destination: 'yousite/public_html/',
                clean: true, // Mirror copy with file deletion
                include: [/* '*.htaccess' */], // Included files to deploy,
                exclude: [ '**/Thumbs.db', '**/*.DS_Store' ],
                recursive: true,
                archive: true,
                silent: false,
                compress: true
    }))
}
</pre>
<p>В ней мы изменяем данные для FTP подключения, чтобы автоматически копировать файлы на хост с помощью команды:</p>
<pre>gulp deploy</pre>