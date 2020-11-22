import React from 'react';

import StarRatingComponent from 'react-star-rating-component';
 
class StarRating extends React.Component {
 
 
  state = {
    rate: 1
  };

  
 
  onStarClick = (nextValue) => {
   
    this.props.Rate(nextValue)
  }
 
  render() {
   
    
    return (                
      <div>
        
        <StarRatingComponent 
          
         className='starrate'
          starCount={5}
          onChange={(e) => this.setState(e.target.value)}
          onStarClick={this.onStarClick}
         
        />
      </div>
    );
  }
}
 export default StarRating