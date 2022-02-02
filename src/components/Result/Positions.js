import { useContext } from "react";
import CircleContext from "../../store/circle-context";
import Position from "./Position";
import style from "./Positions.module.css";

const Positions = () => {
  const circleCtx = useContext(CircleContext);

  const renderPositions = circleCtx.positions.map((item, index) => {
    const { winner, blocked } = circleCtx;
    const disabled = winner !== null && index !== winner && !blocked;

    return (
      <div key={index} className={`col-12 col-sm-6 ${style.position}`}>
        <Position color={item.color} index={index} disabled={disabled}>
          {item.text}
        </Position>
      </div>
    );
  });

  return <div className="row">{renderPositions}</div>;
};

export default Positions;
