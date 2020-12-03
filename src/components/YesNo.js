import styles from "./YesNo.module.scss";
import React, { useState } from "react";

export default function TextInputPage(props) {
  const [activeYes, setActiveYes] = useState(false);
  const [activeNo, setActiveNo] = useState(false);

  return (
    <div className={styles.textInputContainer}>
      <h2 className={styles.title}>{props.question}</h2>
      {/* <YesNo></YesNo> */}
      <div className={styles.YesNoContainer}>
        <input
          type="button"
          className={(styles.button, activeYes ? styles.active : "")}
          value="Yes"
          onClick={() => {
            props.onClick(1);
            setActiveYes(!activeYes);
            if (activeNo) {
              setActiveNo(!activeNo);
            }
          }}
        />
        <input
          type="button"
          className={(styles.button, activeNo ? styles.active : "")}
          value="No"
          onClick={() => {
            props.onClick(-1);
            setActiveNo(!activeNo);
            if (activeYes) {
              setActiveYes(!activeYes);
            }
          }}
        />
      </div>
    </div>
  );
}
