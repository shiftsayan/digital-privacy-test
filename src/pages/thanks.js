import styles from "./index.module.scss";
import { Context } from "../components/store";
import { useContext } from "react";
import Footer from "../components/Footer";

export default function Thanks() {
  const context = useContext(Context);
  console.log(context)
  if(context != {} && !context.sent) {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbwgbEDUMMVmj2q1ZbJqs6s-w0YNESXtDoZ8lSDX321F6lUnCZzf/exec",
      {
        method: "POST",
        body: JSON.stringify(context)
      }
    )
      .then(response => response.text())
      .then(data => console.log(data));
    context.sent = true;
  }
  return (
    <div className={styles.centerAlign}>
      <h2 className={styles.title}>Thanks for taking part in this survey!</h2>
      <Footer level={13} />
    </div>
  );
}
