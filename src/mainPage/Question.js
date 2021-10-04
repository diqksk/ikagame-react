import React from 'react';
import Progress from "./Progress";
import QuestionList from "./QuestionList";
import loadingLogo from "../loading.gif"

const Question = ({history}) => {
    return (
        <div className="question-container">
            <Progress></Progress>
            <QuestionList history={history}></QuestionList>
            <div className="modal-container">
                <div className="loading-container">
                    <img src={loadingLogo} alt=""/>
                    <div>Loading...</div>
                </div>
            </div>
        </div>
    );
};

export default Question;