import React, { useState } from "react";
import styles from "./StatsYesNo.module.scss";

export default function Statsbar(props) {
  var majorityYes = props.majority == 'yes';
  return (
    <div className={styles.overallContainer}>
      <h5 className={styles.title}>{props.question}</h5>
      <p className={styles.average}>{props.percent}% people said {props.majority}. </p>
      <p className={styles.user}>You {props.your == props.majority && "also " } said { props.your }.
      </p>
      <div className={styles.YesNoContainer}>
        <input
          type="button"
          className={(styles.button, majorityYes ? styles.active : "")}
          value="Yes"
        />
        <input
          type="button"
          className={(styles.button, !majorityYes ? styles.active : "")}
          value="No"
        />
      </div>
    </div>
  );
}
