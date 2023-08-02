import { withRouter } from "./withRouter";

const Topics = (props: any) => {
  let queryParam = new URLSearchParams(props?.location?.search);

  console.log("queryParam", queryParam);
  return (
    <div>
      Topic of user {queryParam.get("userId")} -{queryParam.get("name")}
    </div>
  );
};

export default withRouter(Topics);
