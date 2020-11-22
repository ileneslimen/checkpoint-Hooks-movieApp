import React from "react";
import MovieCard from "./MovieCard"

/**
 * Props = {  listOfProjects : arrayOf Objects }
 */

const MoviesList = (props) => {


  
  return (
  
     
      <div class="Movies-container">
        { (props.input==='' && props.rate===1) ? (
         
      props.listofMovies.map((el, i) => (
          <MovieCard key={i} Movie={el} />
        )  )):
        props.listofMovies.filter((movie) => movie.title.toUpperCase().includes(props.input.toUpperCase()) && movie.rate >= props.rate).map((el, i) => (
          <MovieCard key={i} Movie={el} />
        )  ) }
        
      
      

      </div>
   
  );
};

export default MoviesList;