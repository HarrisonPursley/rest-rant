// Import react and Def function
const React = require('react')
const Def = require('./default')

// Create home stub func and export
function home () {
    return(
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="https://placehold.co/250" alt="Placeholder" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Author Name</a> on <a href="SITE_LINK">Placehold</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home