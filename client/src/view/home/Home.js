import React, { useState, useEffect } from 'react'
import Movies from '../../components/movies/Movies';
import SearchInput from '../../components/SearchInput/SearchInput';
import axios from 'axios';

const Home = () => {
  const [movie, setMovie] = useState({})
  // const [searchMovies, setSearchMovies] = useState('')
  // const [showLoading, setShowLoading] = useState(false);

  // const getMovies = (Event) => {
  //   if (Event.key === 'Enter') {
  //     axios.get(`http://localhost:4240/movies`).then((res) => {
  //       setSearchMovies(res.movies)
  //     })
  //     setSearchMovies('')
  //   }

  // }

  useEffect(() => {
    // setShowLoading(true)
    axios.get(`http://localhost:4240/movies`)
    .then(res => {
      const movies = res.movie;
      setMovie(movies);
      // setShowLoading(false)
    })
    
  }, [])
  console.log(movie)
  return (
    <div>
        <SearchInput  />
        <Movies />
    </div>
  )
}

export default Home;