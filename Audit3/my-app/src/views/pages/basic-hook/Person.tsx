import { Fragment, useEffect, useState } from "react";
import PersonPoint from "./PersonPoint";

const Person = () => {
  const [name, setName] = useState<string>("FPT");
  //   const [name, setName] = useState("FPT");
  const [address, setAddress] = useState<any>("17 Duy Tan ");
  const [point, setPoint] = useState(1);
  const [finalPoint, setFinalPoint] = useState(point * 10);
  const [destroyed, setDestroyed] = useState(false);

  const changeInfo = () => {
    setName("FPT Software");
    setAddress(17);
  };

  const changePoint = () => {
    setPoint((prevState) => prevState + 1);
  };

  const changeFinalPoint = () => {
    setFinalPoint((prevState) => prevState * 2);
  };

  //Cách 1
  useEffect(() => {
    console.log("Point changed ");
    // setFinalPoint(point * 10);
  }, [point]); //dependencies

  //Cách 2: component re-render thì sẽ đc gọi lại
  useEffect(() => {
    console.log("Point or final point changed");
  });

  //Cách 3: chỉ gọi khi component được khởi tạo
  useEffect(() => {
    console.log("Component did mount ");
  }, []);

  return (
    <Fragment>
      <h2 style={{ color: "red" }}>
        Welcome {name} to our academy at {address}
      </h2>
      {!destroyed ? (
        <PersonPoint
          point={point}
          setPoint={setPoint}
          changePoint={changePoint}
          finalPoint={finalPoint}
        />
      ) : null}
      <button type="button" onClick={changeInfo}>
        Change state
      </button>
      <button type="button" onClick={changeFinalPoint}>
        Change final point
      </button>
      <button type="button" onClick={() => setDestroyed(!destroyed)}>
        Toggle Person point
      </button>
    </Fragment>
  );
};

export default Person;
