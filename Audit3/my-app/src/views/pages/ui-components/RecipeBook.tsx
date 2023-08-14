import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { NavLink, Route, Routes } from "react-router-dom";
import { Ingredient, Recipe } from "./Recipe";
import { RecipeForm } from "./RecipeForm";
import { RecipeList } from "./RecipeList";

const mockData = [
  {
    id: "1",
    name: "Item 1",
    imgUrl:
      "https://i.pinimg.com/236x/49/12/cf/4912cf6efeb8182c7c557bd6bfd5aec5.jpg",
    description: "Description",
    ingredients: [{ name: "infre 1 ", amount: 2 }],
  },
  {
    id: "2",
    name: "Item 2",
    imgUrl:
      "https://i.pinimg.com/236x/49/12/cf/4912cf6efeb8182c7c557bd6bfd5aec5.jpg",
    description: "Description",
    ingredients: [{ name: "infre 2 ", amount: 2 }],
  },
  {
    id: "3",
    name: "Item 3",
    imgUrl:
      "https://i.pinimg.com/236x/49/12/cf/4912cf6efeb8182c7c557bd6bfd5aec5.jpg",
    description: "Description",
    ingredients: [{ name: "infre 3 ", amount: 2 }],
  },
];

export const RecipesBook = () => {
  const [recipes, setRepcipes] = useState(mockData as Recipe[]);
  const [shoppingIngrediendt, setshoppingIngrediendt] = useState(
    [] as Ingredient[]
  );
  const [showCreate, setShowCreate] = useState<boolean>(false);
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Button onClick={() => setShowCreate(true)}> New Recipe</Button>
          <RecipeList recipes={recipes} />
        </Col>
        <Col md={6}>
          {showCreate ? (
            <RecipeForm setShowCreate={setShowCreate} />
          ) : (
            <h2>Please select a recipe </h2>
          )}
        </Col>
      </Row>
    </Container>
  );
};
