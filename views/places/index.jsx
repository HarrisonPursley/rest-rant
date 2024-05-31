// Import react and Def
const React = require('react')
const Def = require('../default')

// Create places stub func and export
function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className="col-sm-6">
                <h2>{place.name}</h2>
                <p className="text-denter">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}/>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row">{placesFormatted}</div>
            </main>
        </Def>
    )
}

module.exports = index  