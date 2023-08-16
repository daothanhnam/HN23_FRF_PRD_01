import React from "react";
import MyObservable from "./MyObservable";

const b = new MyObservable(1);
const c = new MyObservable(1);
const d = new MyObservable(0);
const a = MyObservable.sum(b, c, d);

class SpreadSheets extends React.Component {
  componentDidMount(): void {
    a.subcrible(() => this.setState({}));
  }

  handleChange = (obs: MyObservable) => (event: any) => {
    obs.value = parseInt(event.target.textContent);
  };
  render() {
    return (
      <table className=" table table-hover">
        <thead>
          <tr>
            <th>Col</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>b</th>
            <td
              contentEditable
              suppressContentEditableWarning
              onBlur={ this.handleChange(b)}
            >
              {b.value}
            </td>
          </tr>
          <tr>
            <th>c</th>
            <td
              contentEditable
              suppressContentEditableWarning
              onBlur={ this.handleChange(c)}
            >
              {c.value}
            </td>
          </tr>
          <tr>
            <th>d</th>
            <td
              contentEditable
              suppressContentEditableWarning
              onBlur={ this.handleChange(d)}
            >
              {d.value}
            </td>
          </tr>
          <tr>
            <th>a</th>
            <td>{a.value}</td>
          </tr>
          
        </tbody>
      </table>
    );
  }
}

export default SpreadSheets;
