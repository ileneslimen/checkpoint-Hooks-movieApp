
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
const MovieCard= (props)=>{
 
return (
  <>

    
            <div className="MovieCard">
             
           
               <img className='movieImg'src={props.Movie.img} alt="notfound" /> 
               
              <div className="caption">
              <h2>{props.Movie.title} </h2>
                  <p>{props.Movie.description}</p>
                  <p>Director:{props.Movie.Director} </p>
                  
                
                  <StarRatingComponent className='star' value={props.Movie.rate}  /> 
                </div>
                </div>
                </>
    
)}




export default MovieCard