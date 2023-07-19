import { Fragment, useState } from "react";
import styles from "./CSSModule.module.css";

const CSSModule = () => {
  const [count, setCount] = useState<number>(0);

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const increseCount = () => {
    setCount(count + 1);
  };

  return (
    <Fragment>
      <h1>CSS Module </h1>
      <div className="main-content">
        <div className={styles.counter}>
          <h2>Styling</h2>
          <button
            className={`${styles.button} ${styles.first} `}
            onClick={decreaseCount}
          >
            -
          </button>
          <div className={styles.spanWrapper}>
            <span className={styles.spanRotate}>{count}</span>
          </div>
          <button
            className={`${styles.button} ${styles.first} `}
            onClick={increseCount}
          >
            +
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default CSSModule;
