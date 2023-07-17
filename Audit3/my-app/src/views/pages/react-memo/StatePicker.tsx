import { ChangeEvent } from "react";
import styles from "./StatePicker.module.css";

interface StatePickerProps {
  options: any[];
  seletedId?: number;
  onSelectState: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const StatePicker = (props: StatePickerProps) => {
  if (props.options.length === 0) {
    return <div> No data </div>;
  }

  return (
    <div>
      <h3>Seleted State : {props.seletedId}</h3>
      <select
        onChange={props.onSelectState}
        value={props.seletedId}
        className={styles.select}
      >
        {props.options.map((char: any) => (
          <option value={char.id} key={char.id}>
            {char.stateName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatePicker;
