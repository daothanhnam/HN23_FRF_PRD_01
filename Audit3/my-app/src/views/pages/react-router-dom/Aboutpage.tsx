import { Fragment } from "react";
import { useParams } from "react-router-dom";

const Aboutpage = () => {
  const params = useParams();
  console.log(params);
  return (
    <Fragment>
      <h3>Student information</h3>
      <div>Student ID: {params?.studentId}</div>{" "}
      <div>Student Name: {params?.studentName}</div>{" "}
    </Fragment>
  );
};

export default Aboutpage;
