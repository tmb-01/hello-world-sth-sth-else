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
import QuizPage from "../quizPage";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import AddQuizPage from "../addQuizPage";
import QuizUsers from "../quizUsersPage";

function MainPage() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <QuizPage/>
                </Route>
                <Route path="/add-quiz">
                    {/*<AddQuizPage/>*/}
                </Route>
                <Route path="/quiz-users-page">
                    <QuizUsers/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default MainPage;
