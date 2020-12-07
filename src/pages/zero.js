import styles from "./index.module.scss";
import TextInput from "../components/TextInput";
import LikertScale from "../components/LikertScale";
import Link from "next/link";
import { Context } from "../components/store";
import { useContext, useState } from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";
import Footer from "../components/Footer";

function storeInputInContext(input) {
  const context = useContext(Context);
  context.zero = input;
}

export default function ElevenAndTwelve() {
  const [input, setInput] = useState("");
  let arrows;
  if (input.length > 0) {
    arrows = (
      <>
        <Link
          href="one"
          onClick={storeInputInContext(input)}
        >
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
        <Link
          href="/"
          onClick={storeInputInContext(input)}
        >
          <a>
            <LeftArrow></LeftArrow>
          </a>
        </Link>
      </>
    );
  } else {
    arrows = (
      <Link
        href="/"
        onClick={storeInputInContext(input)}
      >
        <a>
          <LeftArrow></LeftArrow>
        </a>
      </Link>
    );
  }

  return (
    <div className={styles.centerAlign}>
      <div>
        <TextInput
          question="What is your current perception of technology companies and their commitment to privacy of user data?"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        {arrows}
      </div>
      <Footer level={0} />
    </div>
  );
}
