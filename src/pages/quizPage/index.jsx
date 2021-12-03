import React, {useEffect, useState} from "react";
import {
    FinishedButton,
    FullName,
    FullNameInputBox,
    FullNameInputWrapper,
    Loading,
    Logo,
    Option,
    Question,
    TestBox,
    TestWrapper,
    TimeOut,
    Title,
} from "./styles";
import {ReactComponent as LogoIcon} from "../../assets/images/ibs.svg";
import Timer from "../../components/Timer";
import axios from "axios";
import timeOutImage from "../../assets/images/timeout.gif";
import {baseLink} from "../../baselink/baselink";

function QuizPage() {
    const [fullName, setFullName] = useState({allow: false, data: {}});
    const [tests, setTests] = useState([]);
    const [answers, setAnswers] = useState({});
    const [timeOut, setTimeOut] = useState(false);
    const [submitProcess, setSubmitProcess] = useState({
        loading: false,
        error: false,
        success: false,
    });

    const getTests = () => {
        axios({
            method: "GET",
            url: `${baseLink}/quiz`,
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzcGFjZV9hY2FkZW15IiwiaWF0IjoxNjMxNzg4MTAzLCJleHAiOjE2NjMzMjQxMDN9.Rs9VPFUNbhgrMnTV-Urtd7Z5E0NJhQc1sMA_NbgmNNsWockKinNo7j-TrGlzl5_Q-HNf4b2fXarbzUx3ZVXk9w",
            },
        })
            .then((res) => {
                setTests(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        console.log("update or mount");
        getTests();
        window.onbeforeunload = () => false;
        return () => {
            //   console.log("unmount");
            window.onbeforeunload = null;
        };
    }, []);

    const handleAnswer = (e) => {
        const {name, value} = e.target;
        setAnswers((prevState) => ({...prevState, [name]: value}));
        console.log(answers);
    };

    const submitQuiz = () => {
        setSubmitProcess({
            loading: true,
            error: false,
            success: false,
        });
        const answersInArray = [];
        for (const answer in answers) {
            answersInArray.push({
                questionId: Number(answer),
                choiceId: Number(answers[answer]),
            });
        }
        console.log(answersInArray);

        const form = {
            user: {
                firstName: "G2 " + fullName.data.firstName,
                lastName: fullName.data.lastName,
            },
            answers: answersInArray,
        };
        console.log(form);

        axios({
            method: "POST",
            data: form,
            url: `${baseLink}/quiz/submit-answer-of-user`,
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzcGFjZV9hY2FkZW15IiwiaWF0IjoxNjMxNzg4MTAzLCJleHAiOjE2NjMzMjQxMDN9.Rs9VPFUNbhgrMnTV-Urtd7Z5E0NJhQc1sMA_NbgmNNsWockKinNo7j-TrGlzl5_Q-HNf4b2fXarbzUx3ZVXk9w",
            },
        })
            .then((res) => {
                setSubmitProcess({
                    loading: false,
                    error: false,
                    success: true,
                });
            })
            .catch((err) => {
                setSubmitProcess({
                    loading: false,
                    error: true,
                    success: false,
                });
            })
        // .finally(() => {
        //   setTimeout(() => {
        //     setSubmitProcess({
        //       loading: false,
        //       error: false,
        //       success: false,
        //     });
        //   }, 3000);
        // });
    };

    const submitFullName = (e) => {
        e.preventDefault();
        const {firstName, lastName} = e.target;
        setFullName({
            allow: true,
            data: {
                firstName: firstName.value,
                lastName: lastName.value,
            },
        });
    };

    return (
        <div>
            {!fullName.allow ? (
                <FullNameInputWrapper>
                    <FullNameInputBox onSubmit={submitFullName}>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="firstname"
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="lastname"
                            required
                        />
                        <button>start test</button>
                    </FullNameInputBox>
                </FullNameInputWrapper>
            ) : (
                <>
                    <Logo>
                        <LogoIcon/>
                    </Logo>
                    <Title>Final Quiz</Title>
                    <FullName>
                        {`${fullName.data.firstName} ${fullName.data.lastName}`}
                    </FullName>
                    <TestWrapper>
                        {/*<h1>HTML</h1>*/}
                        {/*{tests*/}
                        {/*    .filter(({quizCategory}) => {*/}
                        {/*        console.log(quizCategory.category);*/}
                        {/*        return quizCategory.category === "HTML";*/}
                        {/*    })*/}
                        {/*    .map(({id, question, quizCategory, options, answer}, index) => {*/}
                        {/*        if (index < 30) {*/}
                        {/*            return (*/}
                        {/*                <TestBox key={id}>*/}
                        {/*                    <Question>*/}
                        {/*                        {index + 1}) {question}*/}
                        {/*                    </Question>*/}
                        {/*                    {options.map(({id: choiceId, choice}) => (*/}
                        {/*                        <Option key={choiceId}>*/}
                        {/*                            <input*/}
                        {/*                                onChange={handleAnswer}*/}
                        {/*                                type="radio"*/}
                        {/*                                name={id}*/}
                        {/*                                value={choiceId}*/}
                        {/*                            />{" "}*/}
                        {/*                            {choice}*/}
                        {/*                        </Option>*/}
                        {/*                    ))}*/}
                        {/*                </TestBox>*/}
                        {/*            );*/}
                        {/*        }*/}
                        {/*    })}*/}
                        {/*<hr/>*/}
                        {/*<h1>CSS</h1>*/}
                        {/*{tests*/}
                        {/*    ?.filter(({quizCategory}) => quizCategory.category === "CSS")*/}
                        {/*    ?.map(*/}
                        {/*        ({id, question, quizCategory, options, answer}, index) => {*/}
                        {/*            if (index < 20) {*/}
                        {/*                return (*/}
                        {/*                    <TestBox key={id}>*/}
                        {/*                        <Question>*/}
                        {/*                            {index + 1}) {question}*/}
                        {/*                        </Question>*/}
                        {/*                        {options.map(({id: choiceId, choice}) => (*/}
                        {/*                            <Option key={choiceId}>*/}
                        {/*                                <input*/}
                        {/*                                    onChange={handleAnswer}*/}
                        {/*                                    type="radio"*/}
                        {/*                                    name={id}*/}
                        {/*                                    value={choiceId}*/}
                        {/*                                />{" "}*/}
                        {/*                                {choice}*/}
                        {/*                            </Option>*/}
                        {/*                        ))}*/}
                        {/*                    </TestBox>*/}
                        {/*                );*/}
                        {/*            }*/}
                        {/*        }*/}
                        {/*    )}*/}
                        {/*<hr/>*/}
                        {/*<h1>JavaScript</h1>*/}
                        {/*{tests*/}
                        {/*    ?.filter(({quizCategory}) => quizCategory.category === "Java_Script")*/}
                        {/*    ?.map(*/}
                        {/*        ({id, question, quizCategory, options, answer}, index) => (*/}
                        {/*            <TestBox key={id}>*/}
                        {/*                <Question>*/}
                        {/*                    {index + 1}) {question}*/}
                        {/*                </Question>*/}
                        {/*                {options.map(({id: choiceId, choice}) => (*/}
                        {/*                    <Option key={choiceId}>*/}
                        {/*                        <input*/}
                        {/*                            onChange={handleAnswer}*/}
                        {/*                            type="radio"*/}
                        {/*                            name={id}*/}
                        {/*                            value={choiceId}*/}
                        {/*                        />{" "}*/}
                        {/*                        {choice}*/}
                        {/*                    </Option>*/}
                        {/*                ))}*/}
                        {/*            </TestBox>*/}
                        {/*        )*/}
                        {/*    )}*/}

                        <h1>React</h1>
                        {tests
                            ?.filter(({quizCategory}) => quizCategory.category === "React")
                            ?.map(
                                ({id, question, quizCategory, options, answer}, index) => {
                                    if (index < 30) {
                                        return (
                                            <TestBox key={id}>
                                                <Question>
                                                    {index + 1}) {question}
                                                </Question>
                                                {options.map(({id: choiceId, choice}) => (
                                                    <Option key={choiceId}>
                                                        <input
                                                            onChange={handleAnswer}
                                                            type="radio"
                                                            name={id}
                                                            value={choiceId}
                                                        />{" "}
                                                        {choice}
                                                    </Option>
                                                ))}
                                            </TestBox>
                                        );
                                    }
                                }
                            )}

                        <h1>Redux</h1>
                        {tests
                            ?.filter(({quizCategory}) => quizCategory.category === "Redux")
                            ?.map(
                                ({id, question, quizCategory, options, answer}, index) => {
                                    if (index < 50) {
                                        return (
                                            <TestBox key={id}>
                                                <Question>
                                                    {index + 1}) {question}
                                                </Question>
                                                {options.map(({id: choiceId, choice}) => (
                                                    <Option key={choiceId}>
                                                        <input
                                                            onChange={handleAnswer}
                                                            type="radio"
                                                            name={id}
                                                            value={choiceId}
                                                        />{" "}
                                                        {choice}
                                                    </Option>
                                                ))}
                                            </TestBox>
                                        );
                                    }
                                }
                            )}
                    </TestWrapper>
                    <FinishedButton
                        process={submitProcess}
                        disabled={
                            submitProcess.loading ||
                            submitProcess.success ||
                            submitProcess.error
                        }
                        onClick={submitQuiz}
                    >
                        {submitProcess.loading ? (
                            <Loading/>
                        ) : submitProcess.success ? (
                            "Success"
                        ) : submitProcess.error ? (
                            "Error"
                        ) : (
                            "Finished"
                        )}
                        {/* Finished */}
                    </FinishedButton>
                    <Timer setTimeOut={setTimeOut}/>
                    {timeOut ? (
                        <TimeOut>
                            <img
                                onDoubleClick={() => setTimeOut(false)}
                                src={timeOutImage}
                                alt="time out"
                            />
                        </TimeOut>
                    ) : (
                        ""
                    )}
                </>
            )}
        </div>
    );
}

export default QuizPage;
