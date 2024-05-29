// import react and Def function
const React = require('react')
const Def = require('./default')
// create home stub func and export
function home () {
    return(
    <Def>
        <main>
            <h1>HOME</h1>
        </main>
    </Def>
    )
}

module.exports = home