import React from 'react';

function Player(props) {
  return (
   <div class="card" style={{width: "18rem"}}>
    <img src={props.img} class="card-img-top" alt="..."/>
    <div class="card-body">
         <h5 class="card-title">{props.name}</h5>
         <p class="card-text">Average: {props.average}</p>
         <p class="card-text">Homers: {props.homers}</p>
         <p class="card-text">RBIs: {props.rbis}</p>
        <button onClick={() => {props.makeChoice(props.position, props.name)}}>Choose Me!</button>
        <a href="google.com" class="btn btn-primary">Go to Google</a>
     </div>
    </div>
  );
}

export default Player;
