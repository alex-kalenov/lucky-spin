import { useEffect, useState } from "react";
import Inputs from "./components/Inputs/Inputs";
import Result from "./components/Result/Result";
import "./styles.css";
import { getRandomInt } from "./helpers/functions";

export default function App() {
  const [positions, setPositions] = useState([]);
  const [winner, setStateWinner] = useState(null);
  const [round, setRound] = useState(0);
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
  }, [winner, round]);

  const setWinner = () => {
    const winnerIndex = getRandomInt(positions.length);
    setStateWinner(winnerIndex);
    setRound((state) => state + 1);
  };

  return (
    <div className="wrapper">
      {!positions.length ? (
        <Inputs setPositions={setPositions} />
      ) : (
        <Result
          positions={positions}
          setWinner={setWinner}
          winner={winner}
          round={round}
          blocked={blocked}
          setBlocked={setBlocked}
        />
      )}
    </div>
  );
}
