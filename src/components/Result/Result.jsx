import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import routes from "../../router/routes";
import { getCorrectAnswers } from "../../store/correctAnswers/selectors";
import { getProblems } from "../../store/quiz/selectors";
import { getUserAnswers } from "../../store/userAnswers/selectors";
import { resetUserAnswer } from "../../store/userAnswers/actions";
import { Title, Text, Button } from "../common";
import "./Result.scss";

export function Result() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const correctAnswers = useSelector(getCorrectAnswers);
  const userAnswers = useSelector(getUserAnswers);
  const problems = useSelector(getProblems);

  const result = () => {
    const count = correctAnswers.reduce((correctCount, answer, index) => {
      if (answer === userAnswers[index]) correctCount++;
      return correctCount;
    }, 0);
    return count;
  };

  const playAgain = () => {
    dispatch(resetUserAnswer());
    navigate(routes.home);
  };

  return (
    <div className="result">
      <Title>You Scored</Title>
      <Title>{`${result()}/${correctAnswers.length}`}</Title>
      <div className="result-list">
        {problems.map((problem, index) => (
          <div className="result-item" key={index}>
            <span className="symbol">{correctAnswers[index] === userAnswers[index] ? "+" : "-"}</span>
            <Text>{parse(problem.question)}</Text>
          </div>
        ))}
      </div>
      <Button onClick={playAgain}>PLAY AGAIN?</Button>
    </div>
  );
}
