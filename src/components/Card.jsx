import axios from "axios";
import React, { useEffect } from "react";

const Card = ({ pokemon }) => {
  return (
    <div className="item">
      <p>{pokemon.name}</p>
    </div>
  );
};

export default Card;
