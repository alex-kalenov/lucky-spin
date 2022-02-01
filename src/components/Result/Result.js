import Circle from "./Circle";
import Positions from "./Positions";
import styles from "./Result.module.css";
import { useContext } from "react";
import CircleContext from "../../store/circle-context";

const Result = (props) => {
  const circleCtx = useContext(CircleContext);

  return (
    <div className={styles.wrapper}>
      <div>
        <Circle />
        {!circleCtx.blocked && (
          <button onClick={circleCtx.setWinner}>ПУСК</button>
        )}
      </div>
      <Positions />
    </div>
  );
};

export default Result;
