import { Fragment, useEffect } from "react";

interface PersonPointInfo {
  point: number;
  finalPoint: number;
  changePoint: () => void;
  setPoint: (point: number) => void;
}

const PersonPoint = (props: PersonPointInfo) => {
  //Cách 4
  useEffect(() => {
    return () => {
      console.log("componentWillUncoummut");
    };
  }, []);
  return (
    <Fragment>
      <h3>
        Your point: <span style={{ color: "green" }}>{props.point}</span>
      </h3>
      <h3>
        Your final point:{" "}
        <span style={{ color: "blue" }}>{props.finalPoint}</span>
      </h3>
      <button type="button" onClick={props.changePoint}>
        Change point
      </button>
      <button type="button" onClick={() => props.setPoint(10)}>
        Change point state
      </button>
    </Fragment>
  );
};

export default PersonPoint;
