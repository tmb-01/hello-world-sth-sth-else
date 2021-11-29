import axios from "axios";
import React, {Component, useState, useEffect} from "react";
import {baseLink} from "../../baselink/baselink";

import {result} from "./results";

import {Bar} from "react-chartjs-2";
import {Chart} from "react-chartjs-2";


import usersData from "./response.json"
import {AnswerWrapper} from "./styles";

function QuizUsers() {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        console.log("get users loading");
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
        // getUsers();
    }, []);

    const categories = ["HTML", "CSS", "Java Script", "React", "Redux",]

    const data = () => {

        const labels = []
        result.forEach(({firstName, lastName, result: {html, css, js, react, redux}}) => {
            labels.push(`${firstName} ${lastName} ${html + css + js + react + redux}`)
        })

        const datasets = [];

        datasets.push({
            label: 'HTML',
            data: result.map(({result: {html}}) => html),
            backgroundColor: '#f72585',
            stack: 'Stack 0',
        })
        datasets.push({
            label: 'CSS',
            data: result.map(({result: {css}}) => css),
            backgroundColor: '#7209b7',
            stack: 'Stack 0',
        })
        datasets.push({
            label: 'JS',
            data: result.map(({result: {js}}) => js),
            backgroundColor: '#3a0ca3',
            stack: 'Stack 0',
        })
        datasets.push({
            label: 'React',
            data: result.map(({result: {react}}) => react),
            backgroundColor: '#4cc9f0',
            stack: 'Stack 0',
        })
        datasets.push({
            label: 'Redux',
            data: result.map(({result: {redux}}) => redux),
            backgroundColor: 'rgb(255, 99, 132)',
            stack: 'Stack 0',
        })

        return ({
            labels,
            datasets
        })

    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <>
            <AnswerWrapper>
                {usersData.map(({id, firstName, lastName, answers}) => (
                    <div key={id}>
                        <h1>
                            {id} {firstName} {lastName}
                        </h1>

                        {/*{categories.map(myCategory=>{*/}

                        HTML {answers.filter(({quiz: {quizCategory: {category}}}) => category === "HTML").reduce(
                        (
                            total,
                            {
                                id,
                                choiceId,
                                questionId,
                                quiz: {
                                    answer: {id: answerId},
                                    quizCategory: {category},
                                },
                            }
                        ) => total + (choiceId == answerId ? 1 : 0),
                        0
                    )}
                        {/*)}*/}

                        <span/>
                        CSS {answers.filter(({quiz: {quizCategory: {category}}}) => category === "CSS").reduce(
                        (
                            total,
                            {
                                id,
                                choiceId,
                                questionId,
                                quiz: {
                                    answer: {id: answerId},
                                    quizCategory: {category},
                                },
                            }
                        ) => total + (choiceId == answerId ? 1 : 0),
                        0
                    )}
                        <span/>
                        Java
                        Script {answers.filter(({quiz: {quizCategory: {category}}}) => category === "Java Script").reduce(
                        (
                            total,
                            {
                                id,
                                choiceId,
                                questionId,
                                quiz: {
                                    answer
                                    // : { id: answerId }
                                    ,
                                    quizCategory: {category},
                                },
                            }
                        ) => total + (choiceId == answer?.id ? 1 : 0),
                        0
                    )}
                        <span/>
                        React {answers.filter(({quiz: {quizCategory: {category}}}) => category === "React").reduce(
                        (
                            total,
                            {
                                id,
                                choiceId,
                                questionId,
                                quiz: {
                                    answer: {id: answerId},
                                    quizCategory: {category},
                                },
                            }
                        ) => total + (choiceId == answerId ? 1 : 0),
                        0
                    )}
                        <span/>
                        Redux {answers.filter(({quiz: {quizCategory: {category}}}) => category === "Redux").reduce(
                        (
                            total,
                            {
                                id,
                                choiceId,
                                questionId,
                                quiz: {
                                    answer: {id: answerId},
                                    quizCategory: {category},
                                },
                            }
                        ) => total + (choiceId == answerId ? 1 : 0),
                        0
                    )}


                        {/*<span/>*/}
                        {/*<span/>*/}
                        {/*{answers.filter(({quiz:{quizCategory:{category}}})=>category==="Java Script").map(*/}
                        {/*    (*/}
                        {/*        {*/}
                        {/*          id,*/}
                        {/*          choiceId,*/}
                        {/*          questionId,*/}
                        {/*          quiz: {*/}
                        {/*            answer*/}
                        {/*            // : { id: answerId }*/}
                        {/*            ,*/}
                        {/*            quizCategory: { category },*/}
                        {/*          },*/}
                        {/*        }*/}
                        {/*    ) => {*/}
                        {/*      if(answer)*/}
                        {/*        console.log("available")*/}
                        {/*      else*/}
                        {/*        console.log(answer)*/}
                        {/*      return (answer?"available \n" : "Not available\n")*/}
                        {/*    }*/}
                        {/*)}*/}


                    </div>
                ))}
            </AnswerWrapper>
            <Bar data={data} options={options}/>
        </>
    );
}

export default QuizUsers;
