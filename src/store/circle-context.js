import React, { useState, useEffect } from "react";

export const CircleContext = React.createContext({
  positions: [],
  winner: null,
  blocked: false,
  startAngle: 0,
  setPositions: (array) => {},
  setWinner: (winnerIndex, angle) => {}
});

const CircleContextProvider = (props) => {
  const [positions, setPositions] = useState([]);
  const [winner, setStateWinner] = useState(null);
  const [startAngle, setStartAngle] = useState(0);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    if (winner !== null) {
      setTimeout(() => {
        setBlocked(false);
        setPositions((state) => {
          return state.map((item, index) => {
            if (index === winner) return { ...item, winner: true };
            return item;
          });
        });
      }, 10000);
    }
  }, [winner, startAngle]);

  const setWinner = (winnerIndex, angle) => {
    setStateWinner(winnerIndex);
    setStartAngle((state) => state + angle);
  };

  const value = {
    positions,
    winner,
    blocked,
    startAngle,
    setPositions,
    setWinner
  };

  return (
    <CircleContext.Provider value={value}>
      {props.children}
    </CircleContext.Provider>
  );
};

export default CircleContextProvider;
