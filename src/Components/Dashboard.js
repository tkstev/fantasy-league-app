import React from 'react';

function Dashboard(props) {
  return (
    <div className="Dashboard">
      <h3>Dream Team</h3>
      <div className = "choice-group">
        <div className = "choice"> First: {props.first} </div>
        <div className = "choice">Second: {props.second}</div>
        <div className = "choice">Third: {props.third}</div>
        <div className = "choice">Short: {props.short}</div>
        <div className = "choice">Left: {props.left}</div>
        <div className = "choice">Center: {props.center}</div>
        <div className = "choice">Right: {props.right}</div>
        <div className = "choice">Catcher: {props.catcher}</div>
        <div className = "choice">Pitcher: {props.pitcher}</div>
      </div>
    </div>
  );
}

export default Dashboard;
