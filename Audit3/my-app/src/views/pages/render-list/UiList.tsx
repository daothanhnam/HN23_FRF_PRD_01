interface ListProps{ 
    color:string[]
}

const UIList = (props: ListProps) => {
  return (
    <>
      <ul>
        {props.color.map((item: string, index: number) => {
         return   <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
};
export default UIList;
