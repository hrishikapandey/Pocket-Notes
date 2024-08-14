import styles from "./ColorCircle.module.css";
function ColorCircle({ color, selectedColor, handelClick }) {
  return (
    <li
      style={{ backgroundColor: color }}
      className={`${styles["color-circle"]} ${
        selectedColor === color ? styles.selected : ""
      }`}
      value={selectedColor}
      key={color}
      onClick={() => handelClick(color)}
    ></li>
  );
}

export default ColorCircle;
