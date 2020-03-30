import React, {Component} from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

function Movie({title,poster,genres,synopsis}){
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster}></MoviePoster>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre,index) => 
                        <MovieGenre genre={genre} key={index} />
                    )}
                    <p className="Movie_Synopsis">{synopsis}</p>
                </div>
            </div>
        </div>
    )
}

Movie.propTypes ={
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}

function MoviePoster({poster}){
    return(
        <img src={poster}></img>
    )
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired
}

function MovieGenre({genre}){
    return(
        <span className="Movie_Genre">{genre}</span>
    )
}

MovieGenre.propTypes = {
    genre : PropTypes.string.isRequired
}

export default Movie;
