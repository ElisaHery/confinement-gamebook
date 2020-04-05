import React, { useState } from 'react';
import Button from './../../components/Button/Button';
import answers from '../../res/answers.json';

import questions from '../../res/questions.json';

import './Question.css';

function Question({ question }) {
  // we have a start question looking like this
  // {text: "Oh non il y a le corona virus !", next: ["a1", "a2", "a3", "a4", "a5", "a6"]}
  // we put this question in state
  const [currentQuestion, setCurrentQuestion] = useState(question);

  if (!currentQuestion) {
    return null;
  }
  // we generate an array of answers from the "next" key
  // answers are looking like this :
  // [{text: "Vous êtes Céline Dion", nextQuestion: "q1"}, {text: "Vous êtes Emmanuel Macron, Edouard Philippe, ou n'importe quelle personne membre du gouvernement", nextQuestion: "q3"}, ...]
  var answerList = [];
  currentQuestion.answers.forEach((id) => {
    answerList.push(answers[id]);
  });

  // on click on an answer we set a new current question with its answers
  const setNextQuestion = (id) => {
    setCurrentQuestion(questions[id]);
  };

  return (
    <div className='section'>
      <h1 className='question'>{currentQuestion.text}</h1>
      <div className='answers'>
        {answerList.map((answer, i) => {
          return (
            <Button
              answer={answer}
              setNextQuestion={setNextQuestion}
              key={i}
            ></Button>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
