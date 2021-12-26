import axios from 'axios'
const SearchMovies = (movie) => {
    const link = `https://www.omdbapi.com/?i=REDACTED_VAL&apikey=REDACTED_VAL&s=${movie.title}`
    return axios.get(link)
    .then((res) => {
        return res.data.Search
    }).catch((err) => {
            console.log(err)
            return []
    })
}


export default SearchMovies