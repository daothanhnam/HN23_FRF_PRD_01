import { Button } from "react-bootstrap";

export const RecipeForm = (props: any) => {
  return (
    <>
      <Button variant="success " onClick={() => props.setShowCreate(false)}>
        Save
      </Button>
      <Button variant="danger " onClick={() => props.setShowCreate(false)}>
        Cancel
      </Button>
      <h2>This is recipe form</h2>
    </>
  );
};
