import React from "react";

const Sidebar = ({ cart }) => {
  const total = cart.reduce((total, player) => total + player.salary, 0);
  return (
    <div>
      <aside className="sidebar">
        <p className="lead">Player Selected: ({cart.length})</p>
        <p>Team Members:</p>
        <ul className="list-group my-4">
          {cart.map((player) => (
            <li key={player.id} className="list-group-item">
              {player.name} - ${player.salary}
            </li>
          ))}
        </ul>
        <div className="d-grid">
          <button className="btn btn-outline-success">
            Total Cost - ${total}
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
