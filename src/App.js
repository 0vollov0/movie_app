import React, {Component} from 'react';
import './App.css';
import Moive from './Movie.js'

class App extends Component{
  state = {
  }

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie =>{     
      return <Moive title={movie.title} poster={movie.medium_cover_image} genres={movie.genres} synopsis={movie.synopsis} key={movie.id}></Moive>
    })

    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callAPI();
    this.setState({
      movies
    })
  }

  _callAPI = async () => {
    try {
      const response = await fetch('https://yts.mx/api/v2/list_movies.json?sort_by=like_count');
      const json = await response.json();
      return json.data.movies;
    }
    catch (err) {
      return console.log(err);
    }
  }

  render(){
    return(
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    )
  }
}

export default App;
