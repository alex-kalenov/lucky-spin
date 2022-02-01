import styles from "./Input.module.css";
import { useRef, useState } from "react";

const Input = (props) => {
  const [edited, setEdited] = useState(false);
  const inputRef = useRef();
  const id = `input-number-${props.number}`;

  const clickHandler = () => {
    const inputValue = inputRef.current.value;
    if (!inputValue.length) return;
    props.onAdd(inputValue, edited, props.number);
    setEdited(true);
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>Позиция № {props.number}</label>
      <input type="text" id={id} ref={inputRef} />
      <button type="button" onClick={clickHandler}>
        {edited ? "Изменить" : "Добавить"}
      </button>
    </div>
  );
};

export default Input;
