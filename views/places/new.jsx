//import React and Def
const React = require('react')
const Def = require('../default')

// define func new_form
function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <div>
                    <form method="POST" action="/places">
                        <div>
                            <label htmlFor="name">Place Name</label>
                            <input id="name" name="name" required />
                        </div>
                        <div>
                            <label htmlFor="pic">Place Picture</label>
                            <input id="pic" name="pic" />
                        </div>
                        <div>
                            <label htmlFor="city">Place City</label>
                            <input id="city" name="city" />
                        </div>
                        <div>
                            <label htmlFor="state">Place State</label>
                            <input id="state" name="state" />
                        </div>
                        <div>
                            <label htmlFor="cuisines">Place Cuisines</label>
                            <input id="cuisines" name="cuisines" required />
                        </div>
                        <input type="submit" value="Add Place" />
                    </form>
                </div>
            </main>
        </Def>
    )
}

// export new_form
module.exports = new_form