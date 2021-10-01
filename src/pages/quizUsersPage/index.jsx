import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import { baseLink } from "../../baselink/baselink";

function QuizUsers() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios({
      method: "GET",
      url: `${baseLink}/quiz/quiz-users`,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzcGFjZV9hY2FkZW15IiwiaWF0IjoxNjMxNzg4MTAzLCJleHAiOjE2NjMzMjQxMDN9.Rs9VPFUNbhgrMnTV-Urtd7Z5E0NJhQc1sMA_NbgmNNsWockKinNo7j-TrGlzl5_Q-HNf4b2fXarbzUx3ZVXk9w",
      },
    })
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users.map(({ id, firstName, lastName, answers }) => (
        <div key={id}>
          <h1>
            {firstName} {lastName}
          </h1>
          {answers.filter(({quiz:{quizCategory:{category}}})=>category==="HTML").reduce(
            (
              total,
              {
                id,
                choiceId,
                questionId,
                quiz: {
                  answer: { id: answerId },
                  quizCategory: { category },
                },
              }
            ) => total + (choiceId == answerId ? 1 : 0),
            0
          )}
          <br />
          {answers.filter(({quiz:{quizCategory:{category}}})=>category==="CSS").reduce(
            (
              total,
              {
                id,
                choiceId,
                questionId,
                quiz: {
                  answer: { id: answerId },
                  quizCategory: { category },
                },
              }
            ) => total + (choiceId == answerId ? 1 : 0),
            0
          )}
        </div>
      ))}
    </div>
  );
}

export default QuizUsers;
