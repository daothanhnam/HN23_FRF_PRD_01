import { Typography, Button, Divider } from "@mui/material";
import { observer } from "mobx-react";
import { CounterStore } from "../store/couter.store";

const CounterMobx = () => {
  const handleFetch = async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/todos/1");

    const data = await response.json();

    CounterStore.setData(data);
  };
  return (
    <div className="d-flex flex-column align-items-center mt-4 ">
      <Button
        variant="outlined"
        color="primary"
        onClick={() => CounterStore.increaseCount1(1)}
      >
        Add count 1{" "}
      </Button>

      <Typography className="ml-2 mr-2 mb-2 mt-2">
        Count number A : {CounterStore.count.numberA}
      </Typography>
      <Typography className="ml-2 mr-2 mb-2 mt-2">
        Total : {CounterStore.total}
      </Typography>
      <Typography className="ml-2 mr-2 mb-2 mt-2">
        Total : {CounterStore.getCount()}
      </Typography>
      <Typography className="ml-2 mr-2 mb-2 mt-2">
        Count number B : {CounterStore.count.numberB}
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => CounterStore.increaseCount2(1)}
      >
        Add count 2{" "}
      </Button>
      <Button color="primary" onClick={handleFetch}>
        Fetch Data{" "}
      </Button>
      <div>Data : {CounterStore.data?.title}</div>
    </div>
  );
};
export default observer(CounterMobx);
