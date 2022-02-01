import Circle from "./Circle";
import Positions from "./Positions";
import styles from "./Result.module.css";

const Result = (props) => {
  const { positions, winner, round, blocked, setBlocked } = props;

  const setWinnerHandler = () => {
    setBlocked(true);
    props.setWinner();
  };

  return (
    <div className={styles.wrapper}>
      <Circle positions={positions} winner={winner} round={round} />
      <div>
        {!blocked && <button onClick={setWinnerHandler}>ПУСК</button>}
        <Positions />
      </div>
    </div>
  );
};

export default Result;
