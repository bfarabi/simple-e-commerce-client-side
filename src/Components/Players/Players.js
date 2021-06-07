import React from "react";
import playerData from "../../Data/fakeData.json";
import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = (props) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(playerData);
  }, []);
  return (
    <section className=" col-md-8 border-end">
      <div className="row row-cols-3 gx-5 gy-5">
        {players.map((player, id) => (
          <Player
            player={player}
            addClickPlayer={props.addClickPlayer}
            key={id}
          ></Player>
        ))}
      </div>
      <div></div>
    </section>
  );
};

export default Players;
