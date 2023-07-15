import React from "react";

interface lifeCycleState {
  favoriteColor?: string;
  isShow?: boolean;
}

export class LifeCycle extends React.Component<any, lifeCycleState> {
  constructor(props: any) {
    super(props);
    console.log("1.constructor");
    this.state = { favoriteColor: "red", isShow: true };
  }

  static getDerivedStateFromProps(props: any, state: lifeCycleState) {
    console.log("2.getDerivedStateFromProps");
    console.log(
      `props: ${JSON.stringify(props)} - state:${JSON.stringify(state)} `
    );

    // if (props.myColor !== state.favoriteColor) {
    //   return { favoriteColor: props.myColor };
    // }
    return null;
  }

  componentDidMount(): void {
    console.log("4.componentDidMount");
    setTimeout(() => {
      this.setState({
        favoriteColor: "purple",
      });
    }, 5000);
  }

  //Updating
  shouldComponentUpdate(
    nextProps: Readonly<any>,

    nextState: Readonly<lifeCycleState>,

    nextContext: any
  ): boolean {
    console.log("2.shouldComponentUpdate");

    return true;
  }

  getSnapshotBeforeUpdate(
    prevProps: Readonly<any>,
    prevState: Readonly<lifeCycleState>
  ) {
    console.log("4.getSnapshotBeforeUpdate");
    const h3 = document.getElementById("element1")!;

    return (h3.innerHTML = `Before the update, 
    the favorite color was ${JSON.stringify(prevState)}
    and props was ${JSON.stringify(prevProps)}
    `);
  }

  componentDidUpdate() {
    console.log("5.componentDidUpdate");
    const h3 = document.getElementById("element2")!;
    h3.innerHTML = `the update favorite is ${this.state.favoriteColor}`;
    return;
  }

  unmouting = () => {
    this.setState({ isShow: false });
  };
  render() {
    console.log("3.rendering");
    let unmountComponent = <Unmount />;
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Life Cycle</h2>
        <h3 style={{ color: `${this.state.favoriteColor}` }}>
          My favorite color is {this.state.favoriteColor} and isShow ={" "}
          {String(this.state.isShow)}
          {this.state.isShow}
        </h3>
        <h3 id="element1">--</h3>
        <h3 id="element2">--</h3>
        {this.state.isShow ? unmountComponent : null}
        <button type="button" onClick={this.unmouting}>
          Unmout
        </button>
      </div>
    );
  }
}

class Unmount extends React.Component {
  componentWillUnmount(): void {
    console.log("6.componentWillUnmount");
    alert("The component to be unmounted ");
  }
  render() {
    return <h2>Waiting unmount!</h2>;
  }
}
