const Movie = ({...props}) => {
    const {movie} = props
    const link = `http://www.imdb.com/title/${movie.imdbID}`;
    return(
        <div className="well">
            <div className="row">
                <div className="col-md-4">
                    <img className="thumbnail" src={movie.Poster} alt="poster"/>
                </div>
                <div className="col-md-8">
                    <h4>{movie.Title}</h4>
                    <ul className="list-group">
                        <li className="list-group-item">Year Released: {movie.Year}</li>
                        <li className="list-group-item">IMDB ID: {movie.imdbID}</li>
                    </ul>
                    <a className="btn btn-primary" href={link}>View on IMDB</a>
                </div>
            </div>
        </div>
    )
}


export default Movie