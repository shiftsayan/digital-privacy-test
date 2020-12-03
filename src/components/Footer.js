import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import styles from "./Footer.module.scss";

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <ProgressBar now={props.level / 13 * 100} />
    </footer>
  );
}
