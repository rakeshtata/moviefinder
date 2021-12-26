import React, {useRef} from 'react'

const SearchForm = ({...props}) => {
    const searchRef = useRef();
    const {setMovie} = props
    const onSubmit = (e) => {
        e.preventDefault()
		setMovie({title: searchRef.current.value.trim()});
    } 
    return(
        <div className="search-form">
            <h1 className="text-center">Search For A Movie</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" ref={searchRef} placeholder="Enter a Movie Title..." />
                </div>
                <button className="btn btn-primary btn-block">Search Movies</button>
            </form>
        </div>
    )	
}


export default SearchForm