import './App.css';
import React, {useState,useEffect} from 'react'
import SearchForm from './Components/SearchForm'
import MovieResults from './Components/MovieResults'
import SearchMovies from './service'


function App() {
  const [movie,setMovie] = useState()
  const [movies,setMovies] = useState([])

  useEffect(() => {
    if(movie) {
      SearchMovies({"title":movie.title}).then((res)=> {
        setMovies(res)
      }).catch((err) => {
        console.log(err)
        setMovies([])
      })
    }
  },[movie])

  return(
    <div>
      <SearchForm setMovie={setMovie}/>
      {movies && movies.length !== 0 && <MovieResults movies={movies} />}
      
    </div>
  )
}

export default App; 
