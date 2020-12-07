import styles from "./index.module.scss";
import { useContext } from "react";

export default function Visualize() {
  return (
    <div className={styles.centerAlign}>
      <div>
        <h2 className={styles.title}>A data visualization will be out soon.</h2>
      </div>
    </div>
  );
}
