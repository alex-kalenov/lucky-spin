import Circle from "./Circle";
import Positions from "./Positions";
import styles from "./Result.module.css";
import { useContext } from "react";
import CircleContext from "../../store/circle-context";

const Result = (props) => {
  const circleCtx = useContext(CircleContext);

  const buttonClass = !circleCtx.blocked ? "" : styles.blocked;

  return (
    <div className={styles.wrapper}>
      <Circle />
      <div className={styles["rest"]}>
        <button onClick={circleCtx.setWinner} className={buttonClass}>
          ПУСК
        </button>
        <Positions />
      </div>
    </div>
  );
};

export default Result;
