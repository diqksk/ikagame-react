import React from 'react';
import Progress from "./Progress";
import QuestionList from "./QuestionList";
import loadingLogo from "../loading.gif"
import Adfit from "./Adfit";
import requestServer from "../service/requestServer";
import questionService from "../service/questionService";

const Question = ({history}) => {
        const getResult = ()=>{
            document.querySelector(".modal-adfit-div").style.display="none";
            document.querySelector(".loading-container").style.display="block";
            setTimeout(() => {
                requestServer.getResult(questionService.getResearchFunc()).then(data => {
                    console.log(data.data.msg);
                    history.push(`/result/${data.data.msg}`)
                })
            }, 3000)
        }
    return (
        <div className="question-container">
            <Progress></Progress>
            <QuestionList history={history}></QuestionList>
            <div className="modal-container">
                <div className="loading-container">
                    <img src={loadingLogo} alt=""/>
                    <div>Loading...</div>
                </div>

                <div className="modal-adfit-div" style={{display:"block"}}>
                    <Adfit height={300} width={300} position={"changer"} scrFlag={true} unit={"YgTB7vVd3qLsl3Ic"}></Adfit>
                    <button className={"click"} onClick={getResult}>결과 보기</button>
                </div>
            </div>
        </div>
    );
};

export default Question;