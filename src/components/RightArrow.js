import styles from "./RightArrow.module.scss";
import React, { useState } from "react";

function RightArrow(props) {
  return <i className={`${styles.arrow} ${styles.right}`}></i>;
}

export default RightArrow;
