import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import styles from "./Footer.module.scss";

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <ProgressBar animated="true" striped now={(props.level / 9) * 100} />
    </footer>
  );
}
