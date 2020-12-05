import React from 'react';
import Player from './Player';

function Position(props) {
  return (
    <div className="Position">
      <h3>{props.position}</h3>
      <div className="card-container">
            <Player img={props.img1} name={props.name1}/>
            <Player img={props.img2} name={props.name2}/>
      </div>
    </div>
  );
}

export default Position;