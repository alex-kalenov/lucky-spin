import styles from "./Position.module.css";

const Position = (props) => {
  const { disabled } = props;
  const positionClass = `${styles.wrapper} ${disabled ? styles.disabled : ""}`;

  return (
    <div className={positionClass}>
      <div className={styles.color} style={{ backgroundColor: props.color }}>
        {props.index + 1}
      </div>
      <span>{props.children}</span>
    </div>
  );
};

export default Position;
