import React, { useState, useEffect } from "react";
import { getRandomInt } from "../helpers/functions";

const CircleContext = React.createContext({
  positions: [],
  winner: null,
  blocked: false,
  round: 0,
  circleStyle: {},
  setPositions: (array) => {},
  setWinner: () => {}
});

export const CircleContextProvider = (props) => {
  const [positions, setPositions] = useState([]);
  const [winner, setStateWinner] = useState(null);
  const [round, setRound] = useState(0);
  const [blocked, setBlocked] = useState(false);
  const [circleStyle, setCircleStyle] = useState({});

  useEffect(() => {
    if (winner !== null) {
      setTimeout(() => {
        setBlocked(false);
      }, 10000);
    }
  }, [winner, round]);

  const setWinner = () => {
    const winnerIndex = getRandomInt(positions.length);
    setBlocked(true);
    setStateWinner(winnerIndex);
    setRound((state) => state + 1);
  };

  const value = {
    positions,
    winner,
    blocked: blocked,
    round,
    setPositions,
    setWinner,
    circleStyle
  };

  return (
    <CircleContext.Provider value={value}>
      {props.children}
    </CircleContext.Provider>
  );
};

export default CircleContext;
