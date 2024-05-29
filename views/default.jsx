// import react
const React = require('react')
// create Def stub function
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}
// export Def function
module.exports = Def