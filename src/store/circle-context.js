import React, { useState, useEffect } from "react";
import { getRandomInt } from "../helpers/functions";

const CircleContext = React.createContext({
  positions: [],
  winner: null,
  blocked: false,
  round: 0,
  setPositions: (array) => {},
  setWinner: () => {}
});

const DUMMY_POS = [
  { text: "Понедельник", color: "#4b8fb1" },
  { text: "Вторник", color: "#f4755c" },
  { text: "Среда", color: "#64c492" },
  { text: "Любой другой день недели", color: "#dfa388" }
];

export const CircleContextProvider = (props) => {
  const [positions, setPositions] = useState([]);
  const [winner, setStateWinner] = useState(null);
  const [round, setRound] = useState(0);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    if (winner !== null) {
      setTimeout(() => {
        setBlocked(false);
      }, 10000);
    }
  }, [winner, round]);

  const setWinner = () => {
    if (blocked) return;
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
    setWinner
  };

  return (
    <CircleContext.Provider value={value}>
      {props.children}
    </CircleContext.Provider>
  );
};

export default CircleContext;
