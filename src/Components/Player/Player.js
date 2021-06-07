import React, { useState } from "react";
import "./Player.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Player = (props) => {
  const { name, country, salary, img } = props.player;
  const [isClicked, setIsClicked] = useState(false);
  // console.log(props.player);
  return (
    <div className="single-player col text-center">
      <div className="card border-1">
        <img className="img-fluid w-200" src={img} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6>{country}</h6>
          <p className="card-text">${salary}/Per Match</p>
          <button
            disabled={isClicked}
            onClick={() => {
              props.addClickPlayer(props.player);
              setIsClicked(true);
            }}
            className="btn btn-success"
          >
            <FontAwesomeIcon icon={faPlus} /> {isClicked ? "Selected" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
