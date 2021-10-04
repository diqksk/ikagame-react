import React from 'react';
import Main from "./Main";
import Question from "./Question";

const MainQuestion = ({history}) => {
    return (
        <div className="mainQuestion-div">
            <Main></Main>
            <Question history={history}></Question>
            <div className="footer">
                <span>DEVELOPED BY CHANWOO PARK<p>Email: diqksk@naver.com</p></span>
            </div>
        </div>
    );
};

export default MainQuestion;