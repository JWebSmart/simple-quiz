import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as api from "../../apis/quiz";
import routes from "../../router/routes";
import { getUserAnswers } from "../../store/userAnswers/selectors";
import { getProblems } from "../../store/quiz/selectors";
import { getCorrectAnswerSuccess } from "../../store/correctAnswers/actions";
import { setUserAnswer } from "../../store/userAnswers/actions";
import { getQuizFailed, getQuizRequest, getQuizSuccess } from "../../store/quiz/actions";
import { Title, Text, Button, Label, Loading, Radio } from "../common";
import "./Quiz.scss";

export function Quiz() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userAnswers = useSelector(getUserAnswers);
  const problems = useSelector(getProblems);

  const [problemNumber, setQuizNumber] = useState(0);
  const [answerOptions, setAnswerOptions] = useState([]);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const getQuiz = async () => {
      dispatch(getQuizRequest());
      try {
        const response = await api.apiGetQuizs();
        dispatch(getQuizSuccess(response.results));
  
        // This logic will be remove in result page.
        dispatch(getCorrectAnswerSuccess(response.results));
      } catch (e) {
        dispatch(getQuizFailed());
        console.error(e);
      }
    }
    
    getQuiz();
  }, [dispatch]);

  useEffect(() => {
    if (problems.length > 0) {
      const answers = [problems[problemNumber].correct_answer, ...problems[problemNumber].incorrect_answers].sort();
      setAnswerOptions(
        answers.map(option => ({
          value: option,
          label: option,
        })),
      );
    }

    const userAnswer = userAnswers[problemNumber];
    setAnswer(userAnswer === undefined ? "" : userAnswer);
  }, [problems, problemNumber, userAnswers]);

  const prevQuiz = () => {
    if (problemNumber > 0) setQuizNumber(problemNumber - 1);
  };
  const nextQuiz = () => {
    dispatch(setUserAnswer({ answer, problemNumber }));

    if (problemNumber < problems.length - 1) setQuizNumber(problemNumber + 1);
    else navigate(routes.result);
  };

  return (
    <div className="quiz">
      {problems.length === 0 ? (
        <Loading>Loading...</Loading>
      ) : (
        <>
          <Title className="quiz-title">{parse(problems[problemNumber]?.category)}</Title>
          <div className="quiz-container">
            <Text className="question" data-test="aaa">
              {parse(problems[problemNumber]?.question)}
            </Text>
          </div>
          <div className="answer-container">
            {problems[problemNumber]?.type === "boolean" && (
              <Radio
                id={`answer-${problemNumber}`}
                onChange={setAnswer}
                name="answer"
                data={answerOptions}
                value={answer}
              />
            )}
          </div>
          <div className="info">
            <Button onClick={prevQuiz}>Prev</Button>
            <Label type="strong">
              {problemNumber + 1} of {problems.length}
            </Label>
            <Button onClick={nextQuiz}>{problems.length - 1 > problemNumber ? "Next" : "Finish"}</Button>
          </div>
        </>
      )}
    </div>
  );
}
