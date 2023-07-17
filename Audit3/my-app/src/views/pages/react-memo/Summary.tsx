import React, { useEffect } from "react";
import { ElectionState } from "./Election.model";

import styles from "./Summary.module.css";
interface SummaryProps {
  state?: ElectionState;
}

const Summary = (props: SummaryProps) => {
  console.log("Summary re-render");

  useEffect(() => {
    console.log("Summary Props Changed");
  }, [props]);

  return (
    <div className={styles.summary}>
      <span>Summary</span>

      <h2>State name: {props.state?.stateName}</h2>

      <p>
        Number of Electoral votes :
        <span className={styles.output}>{props.state?.electoralVotes}</span>
      </p>

      {props.state?.candidates?.map((candidate) => (
        <p key={candidate.id}>
          <span>Number vote for {candidate.fullName}</span>

          {" : "}

          <span className={styles.output}>{candidate.vote}</span>
        </p>
      ))}
    </div>
  );
};

export default React.memo(Summary, (prevProps, nextProps) => {
  return prevProps.state?.id === nextProps.state?.id;
});
