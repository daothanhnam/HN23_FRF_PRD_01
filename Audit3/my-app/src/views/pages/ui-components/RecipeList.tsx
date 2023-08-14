import { ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Recipe } from "./Recipe";

export const RecipeList = (props: { recipes: Recipe[] }) => {
  return (
    <ListGroup>
      {props.recipes.map((recipe) => (
        <NavLink
          key={recipe.id}
          to={`recipes/${recipe.id}`}
          className="list-group-item list-group-item-action "
        >
          <div className="d-flex w-100 justify-content-between">
            <div>
              <h5 className="mb-1">{recipe.name}</h5>
              <p>{recipe.description}</p>
            </div>
            <div>
              <img src={recipe.imgUrl} alt="Recipe" width={50} height={50} />
            </div>
          </div>
        </NavLink>
      ))}
    </ListGroup>
  );
};
