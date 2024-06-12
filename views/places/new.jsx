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
                        <div className="form-group">
                            <label for="founded">Founded Year</label>
                            <input className="form-control" id="founded" name="founded" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Place Name</label>
                            <input className="form-control" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pic">Place Picture</label>
                            <input className="form-control" id="pic" name="pic" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">Place City</label>
                            <input className="form-control" id="city" name="city" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">Place State</label>
                            <input className="form-control" id="state" name="state" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cuisines">Place Cuisines</label>
                            <input className="form-control" id="cuisines" name="cuisines" required />
                        </div>
                        <input className="btn btn-primary" type="submit" value="Add Place" />
                    </form>
                </div>
            </main>
        </Def>
    )
}

// export new_form
module.exports = new_form