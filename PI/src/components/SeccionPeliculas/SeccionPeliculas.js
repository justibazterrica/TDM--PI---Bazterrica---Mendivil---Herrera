import React, { Component } from 'react'

class SeccionPeliculas extends Component {
  render() {
    return (
      <React.Fragment>

        <h2 className="alert alert-primary">Popular movies this week</h2>
        <section className="row cards" id="movies">
          <article className="single-card-movie">
            <img 
              src="https://image.tmdb.org/t/p/w500/tzrJulItjttxzoX0t3B2My46TS7.jpg" 
              className="card-img-top"
              alt="..."
            />
            <div className="cardBody">
              <h5 className="card-title">The Thursday Murder Club</h5>
              <p className="card-text">
                A group of senior sleuths passionate about solving cold cases get plunged into
                a real-life murder mystery in this comic crime caper.
              </p>
              <a href="movie.html" className="btn btn-primary">Ver más</a>
              <a href="" className="btn alert-primary">🩶</a>
            </div>
          </article>

          <article className="single-card-movie">
            <img 
              src="https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg" 
              className="card-img-top"
              alt="..."
            />
            <div className="cardBody">
              <h5 className="card-title">F1</h5>
              <p className="card-text">
                Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling
                Formula 1 team.
              </p>
              <a href="movie.html" className="btn btn-primary">Ver más</a>
              <a href="" className="btn alert-primary">♥️</a>
            </div>
          </article>
        </section>

        <h2 className="alert alert-primary">Movies now playing</h2>
        <section className="row cards" id="now-playing">
          <article className="single-card-playing">
            <img 
              src="https://image.tmdb.org/t/p/w500/yvirUYrva23IudARHn3mMGVxWqM.jpg" 
              className="card-img-top"
              alt="..."
            />
            <div className="cardBody">
              <h5 className="card-title">War of the Worlds</h5>
              <p className="card-text">
                Will Radford is a top analyst for Homeland Security who tracks threats.
              </p>
              <a href="movie.html" className="btn btn-primary">Ver más</a>
              <a href="" className="btn alert-primary">🩶</a>
            </div>
          </article>
        </section>

        <h2 className="alert alert-warning">Popular TV shows this week</h2>
        <section className="row cards" id="tv-show">
          <article className="single-card-tv">
            <img 
              src="https://image.tmdb.org/t/p/w500/9mYeRoWguq5etbwJRdF8BXFKiF.jpg" 
              className="card-img-top"
              alt="..."
            />
            <div className="cardBody">
              <h5 className="card-title">The Terminal List: Dark Wolf</h5>
              <p className="card-text">
                Navy SEAL Ben Edwards gets entangled in the CIA’s black operations.
              </p>
              <a href="serie.html" className="btn btn-primary">Ver más</a>
              <a href="" className="btn alert-primary">♥️</a>
            </div>
          </article>
        </section>

      </React.Fragment>
    )
  }
}

export default SeccionPeliculas