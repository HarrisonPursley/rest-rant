//import React and Def
const React = require('react')
const Def = require('../default')

// define func new_form
function new_form () {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <div>
                    <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                        <div className="form-group col-sm-4">
                            <label htmlFor="founded">Founded</label>
                            <input className="form-control"
                                id="founded"
                                name="founded"
                                value={data.place.founded}
                            />
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
                <div>
                    <h1>Add a New Comment</h1>
                        <form method="POST" action="/places">
                            <div className="form-group">
                                <label htmlFor="author">Username</label>
                                <input type='text' className="form-control" id="author" name="author" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <input type='textarea' className="form-control" id="content" name="content" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rating">Rating</label>
                                <input type='number' step='0.5' className="form-control" id="rating" name="author" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rant">Rant</label>
                                <input type='checkbox' className="form-control" id="rant" name="rant" />
                            </div>
                            <input className="btn btn-primary" type="submit" value="Add Comment" />
                        </form>
                </div>
            </main>
        </Def>
    )
}

// export new_form
module.exports = new_form