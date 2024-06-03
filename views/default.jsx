// import react
const React = require('react')
// create Def stub function
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js'></script>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}
// export Def function
module.exports = Def