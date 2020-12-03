import React from "react";
import Link from "next/link";

import styles from "./Navbar.module.scss";

export default function Header() {
  return (
    <nav className={styles.navContainer}>
      <Link href="/">
        <a className={styles.left}>Digital Privacy Test</a>
      </Link>

      {/* <div className={styles.right}>About this Project</div> */}
    </nav>
  );
}
