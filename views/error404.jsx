// Import react and Def
const React = require('react')
const Def = require('./default')

// Create error 404 stub func and export
function error404 () {
    return(
        <Def>
            <main>
                <h1>Error 404: PAGE NOT FOUND</h1>
                <p>The requested page cannot be found.</p>
            </main>
        </Def>
    )
}

module.exports = error404