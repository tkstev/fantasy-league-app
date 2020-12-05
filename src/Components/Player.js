import React from 'react';

function Player(props) {
  return (
   <div class="card" style={{width: "18rem"}}>
    <img src={props.img} class="card-img-top" alt="..."/>
    <div class="card-body">
         <h5 class="card-title">{props.name}</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="google.com" class="btn btn-primary">Go to Google</a>
     </div>
    </div>
  );
}

export default Player;
