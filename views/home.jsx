// Import react and Def function
const React = require('react')
const Def = require('./default')

// Create home stub func and export
function home () {
    return(
        <Def>
            <main>
                <h1>HOME</h1>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home