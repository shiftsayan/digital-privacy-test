import styles from "./LeftArrow.module.scss";
import React, { useState } from "react";

function LeftArrow(props) {
  return <i className={`${styles.arrow} ${styles.left}`}></i>;
}

export default LeftArrow;
