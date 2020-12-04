import styles from "./index.module.scss";
import YesNo from "../components/YesNo";
import Link from "next/link";
import { Context } from "../components/store";
import { useContext, useState } from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";
import Footer from "../components/Footer";

function storeInputInContext(input) {
  const context = useContext(Context);
  context.twelve = input;
}

export default function Twelve() {
  const [yesno, setYesNo] = useState(0);
  let arrows;
  if (yesno == 0) {
    arrows = (
      <Link href="eleven" onClick={storeInputInContext(yesno)}>
        <a>
          <LeftArrow></LeftArrow>
        </a>
      </Link>
    );
  } else {
    arrows = (
      <>
        <Link href="thanks" onClick={storeInputInContext(yesno)}>
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
        <Link href="eleven" onClick={storeInputInContext(yesno)}>
          <a>
            <LeftArrow></LeftArrow>
          </a>
        </Link>
      </>
    );
  }

  return (
    <div className={styles.centerAlign}>
      <div>
        <YesNo
          question="Do you think Google sells your data to other companies?"
          value={yesno}
          onClick={response => setYesNo(response)}
        />
        {arrows}
      </div>
      <Footer level={12} />
    </div>
  );
}
