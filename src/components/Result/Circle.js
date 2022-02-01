import styles from "./Circle.module.css";
import { getTanDeg } from "../../helpers/functions";
import { useEffect, useState } from "react";

const Circle = (props) => {
  const { positions, winner, round } = props;
  const [circleStyle, setCircleStyle] = useState({});

  const angle = 360 / positions.length;
  const borderLength = 300 * getTanDeg(angle / 2);
  const borderRule = `${borderLength}px solid transparent`;
  useEffect(() => {
    if (winner !== null)
      setCircleStyle({
        transform: `rotate(-${angle * winner + 360 * round}deg)`
      });
  }, [winner, angle, round]);

  const sectors = positions.map((item, index) => {
    const style = {
      transform: `translateX(-50%) rotate(${angle * index}deg)`,
      borderBottomColor: item.color,
      borderRight: borderRule,
      borderLeft: borderRule
    };

    return (
      <div key={index} className={styles["triangle"]} style={style}>
        <div>{item.text}</div>
      </div>
    );
  });

  return (
    <div className={styles["meta-wrapper"]}>
      <div className={styles.wrapper} style={circleStyle}>
        {sectors}
      </div>
      <div className={styles.mark}></div>
    </div>
  );
};

export default Circle;
