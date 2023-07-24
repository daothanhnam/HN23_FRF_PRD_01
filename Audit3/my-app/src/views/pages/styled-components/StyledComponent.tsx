import styled, { ThemeProvider } from "styled-components";
import { keyframes } from "styled-components";
interface ButtonProps {
  primary?: boolean;
}
interface ThemeProps {
  main?: string;
  color?: string;
}
interface ThemeAdvanceProps {
  fg?: string;
  bg?: string;
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
  border: 2px ${(props) => (props.primary ? "solid" : "dashed")} #bf4f74;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    color: ${(props) => (props.primary ? "#bf4f74" : "white")};
    background: ${(props) => (!props.primary ? "#bf4f74" : "white")};
  }
  
`;
// End Demo2
//Demo3
const TomatoButton = styled(Button)`
  background: tomato;
  color: white;
  border-color: tomato;
  &:hover {
    background: white;
    color: tomato;
  }
`;
const LemonButton = styled(TomatoButton)`
  background: yellow;
  color: black;
  border-color: yellow;
  &:hover {
    background: black;
    color: yellow;
  }
`;
//EndDemo3

// demo4

const theme = {
  main: "mediumseagreen",
  color: "chocolate ",
};

const ThemeButton = styled.button<ThemeProps>`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;

  /* color the border and text with theme.main */
  color: ${(props) => props.theme.color};
  border: 2px dotted ${(props) => props.theme.main};
`;

ThemeButton.defaultProps = {
  theme: {
    main: "#BF4F74",
    color: "chocolate",
  },
};

const TextDetail = styled.p`
  color: ${(props) => props.theme.color};
`;
// end demo4

// demo5
const AdvanceButton = styled.button<ThemeAdvanceProps>`
  color: ${(props) => props.theme.fg};
  border: 2px dashed ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
`;

const themeAdvance = {
  fg: "#b4f474",
  bg: "chocolate",
};

const invertThemeAdvance = ({ fg, bg }: ThemeAdvanceProps) => ({
  fg: bg,
  bg: fg,
});
// end demo5
// demo6
const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  animation: ${rotate} 10000000s linear infinite;
  padding: 2rem 1rem;
  font-size: 2rem;
`;
// end demo6
// demo7
const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: papayawhip;
  color: #bf4f74;
  text-decoration: none;
`;
const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 48px;
  height: 48px;

  ${Link}:hover & {
    fill: rebeccapurple;
  }
`;
const Label = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.2;

  &::before {
    content: "◀";
    margin: 0 10px;
  }
`;
// end demo7

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
      <hr />
      {/* demo2  */}
      <div>
        <h3>Style Button</h3>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </div>
      <hr />
      {/* end demo2  */}
      {/* demo3  */}
      <div>
        <h3>Style Custom Button</h3>
        <TomatoButton> Tomato </TomatoButton>
        <LemonButton> Lemon </LemonButton>
      </div>
      <hr />
      {/* end demo3  */}
      {/* demo4 */}
      <div>
        <h3>Theme Button</h3>
        <ThemeButton>Normal</ThemeButton>

        <ThemeProvider theme={theme}>
          <ThemeButton>Theme</ThemeButton>
          <TextDetail>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,
            ullam?
          </TextDetail>
        </ThemeProvider>
      </div>
      {/* end demo4 */}
      <hr />
      {/* demo5 */}
      <div>
        <ThemeProvider theme={themeAdvance}>
          <AdvanceButton>Default advance </AdvanceButton>
          <ThemeProvider theme={invertThemeAdvance}>
            <AdvanceButton>Invert advance </AdvanceButton>
          </ThemeProvider>
        </ThemeProvider>
      </div>
      {/* demo5 */}
      <hr />
      {/* demo6 */}
      <div>
        <h3>Style animation </h3>
        <Rotate> Animation</Rotate>
      </div>
      {/* end  demo6 */}
      <hr />
      {/* demo7 */}
      <div>
        <h3>Hovering parent changes child's style </h3>
        <Link href="#">
          <Icon viewBox="0 0 20 20 ">
            <path
              d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1
             1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4
              0h2v2H9V7zm4 0h2v2h-2V7z"
            />
          </Icon>
          <Label>Hovering my parent change my style!</Label>
        </Link>
      </div>
      {/* end demo7 */}
    </div>
  );
};

export default StyledComponent;
