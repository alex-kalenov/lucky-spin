import styles from "./Inputs.module.css";
import { useCallback, useEffect, useState } from "react";
import Input from "./Input";
import { getPreparedColor } from "../../helpers/functions";

const Inputs = (props) => {
  const [localPos, setLocalPos] = useState([]);
  const [inputs, setInputs] = useState([]);

  const addLocalPos = useCallback((pos, edited, numb) => {
    if (edited) {
      setLocalPos((state) =>
        state.map((item, index) => {
          if (index === numb - 1)
            return { text: pos, color: item.color, winner: false };
          return item;
        })
      );
      return;
    }
    setLocalPos((state) =>
      state.concat({
        text: pos,
        color: getPreparedColor(state.length),
        winner: false
      })
    );
    setInputs((state) => {
      const number = state.length + 1;
      return state.concat(
        <div key={number} className="col-xl-6 col-12">
          {" "}
          <Input number={number} onAdd={addLocalPos} />
        </div>
      );
    });
  }, []);

  const approvePositions = (event) => {
    event.preventDefault();

    props.setPositions(localPos);
  };

  useEffect(() => {
    setInputs((state) =>
      state.concat(
        <div key="1" className="col-xl-6 col-12">
          <Input number="1" onAdd={addLocalPos} />
        </div>
      )
    );
  }, [addLocalPos]);

  return (
    <div className={styles.wrapper}>
      <span>Введите позиции розыгрыша</span>
      <div>
        <form onSubmit={approvePositions}>
          <div className="row">{inputs}</div>
          {localPos.length > 2 && (
            <button type="submit" className={styles.submit}>
              Подтвердить
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Inputs;
