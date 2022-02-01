import styles from "./Circle.module.css";
import { getTanDeg } from "../../helpers/functions";
import React, { useContext } from "react";
import CircleContext from "../../store/circle-context";

const Circle = (props) => {
  const circleCtx = useContext(CircleContext);
  const { positions, winner, round } = circleCtx;

  const angle = 360 / positions.length;
  const borderLength = 300 * getTanDeg(angle / 2);
  const borderRule = `${borderLength}px solid transparent`;

  let circleStyle = {};
  if (winner !== null) {
    circleStyle = {
      transform: `rotate(-${angle * winner + round * 360}deg)`
    };
  }

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
