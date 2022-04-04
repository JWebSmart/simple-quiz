import { useNavigate } from "react-router-dom";
import routes from "../../router/routes";
import { Title, Text, Button } from "../common";
import "./Home.scss";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Title>Welcome to the Trivia Challenge</Title>
      <Text>You will be presented with 10 True or False questions.</Text>
      <Text>Can you score 100%?</Text>
      <Button onClick={() => navigate(routes.quiz)}>BEGIN</Button>
    </div>
  );
}
