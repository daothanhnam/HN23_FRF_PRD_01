
import styled from "styled-components";
interface ButtonProps{
    primary?:boolean
}
// Demo1
const Wrapper = styled.section`
  padding: 4em;
  background-color: papayawhip;
`;
const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;
// End Demo1
// Demo2
const Button = styled.button<ButtonProps>`
  background: ${(props) => (props.primary ? "#bf4f74" : "white")};
  color: ${(props) => (!props.primary ? "#bf4f74" : "white")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    color: ${(props) => (props.primary ? "#bf4f74" : "white")};
    background: ${(props) => (!props.primary ? "#bf4f74" : "white")};
  }
`;
// End Demo2
const StyledComponent = () => {
  return (
    <div
      className="container"
      style={{ border: "2px solid pink ", marginBottom: "20px" }}
    >
      {/* demo 1  */}
      <Wrapper>
        <Title>Hello style component</Title>
      </Wrapper>
      {/*  end  demo 1  */}
      {/* demo2  */}
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      {/* end demo2  */}
    </div>
  );
};

export default StyledComponent;
