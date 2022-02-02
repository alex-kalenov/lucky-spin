import styles from "./Circle.module.css";
import { getTanDeg } from "../../helpers/functions";
import React, { useContext } from "react";
import CircleContext from "../../store/circle-context";

const Circle = (props) => {
  const circleCtx = useContext(CircleContext);
  const { positions, winner, round } = circleCtx;

  const windowWidth = window.innerWidth;
  let circleSize = 600;
  if (windowWidth < 1200) {
    circleSize = 400;
  }
  if (windowWidth < 992) {
    circleSize = 250;
  }

  const angle = 360 / positions.length;
  const borderLength = (circleSize / 2) * getTanDeg(angle / 2);
  const borderRule = `${borderLength}px solid transparent`;

  let circleStyle = { width: circleSize, height: circleSize };
  if (winner !== null) {
    circleStyle = {
      ...circleStyle,
      transform: `rotate(-${angle * winner + round * 360}deg)`
    };
  }

  const sectors = positions.map((item, index) => {
    const style = {
      transform: `translateX(-50%) rotate(${angle * index}deg)`,
      borderBottom: `${circleSize / 2}px solid ${item.color}`,
      borderRight: borderRule,
      borderLeft: borderRule,
      borderTop: `${circleSize / 2}px solid transparent`
    };

    return (
      <div key={index} className={styles["triangle"]} style={style}>
        <div>{index + 1}</div>
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
