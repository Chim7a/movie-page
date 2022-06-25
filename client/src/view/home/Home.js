import React from 'react'
import Movies from '../../components/movies/Movies';
import SearchBtn from '../../components/searchBtn/SearchBtn';

const Home = () => {
  return (
    <div>
        <SearchBtn />
        <Movies />
    </div>
  )
}

export default Home;