// import react
const React = require('react')
// create Def stub function
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" />
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}
// export Def function
module.exports = Def