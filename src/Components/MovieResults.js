import Movie from './Movie'

const MovieResults = ({...props}) => {
    const {movies} = props
    return(
        <div>
            <h3 className="text-center">Results</h3>
            {
                movies.map(function(movie, i){
                    return(
                        <Movie movie={movie} key={i} />
                    )
                })
            }
        </div>
    )
}


export default MovieResults