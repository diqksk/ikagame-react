import React from 'react';
import questionService from "../service/questionService";
import requestServer from "../service/requestServer";


const QuestionList = ({history}) => {
    const questions = questionService.getQuestions();
    const userResearch = {};
    const getNextQuestion = (qNo, result)=>{
        const key = "q"+qNo;
        const value = result

        userResearch[key]=value;

        setTimeout(()=>{
            document.querySelector(".slider").style.transform = `translate(-${qNo*100}vw)`;
            document.querySelector(".progress-bar").style.width = `calc(${qNo*100}%/12)`;
            if(qNo<12)
            questionService.addRound(qNo+1);
        },350)

        if(qNo === 12) {
            document.querySelector(".modal-container").style.zIndex = 9999;
            document.querySelector(".modal-container").style.opacity = 1;
            setTimeout(() => {
                requestServer.getResult(userResearch).then(data => {
                    console.log(data.data.msg);
                    history.push(`/result/${data.data.msg}`)
                })
            }, 3000)
        }
    }

    const questionArr= questions.map((q,idx)=>{
        return <div key={idx} className="question-div-all">
            <div className="question-div">
                <p className="question-no">
                    Q.{q.qNo}
                </p>
                <p>
                    {q.question}
                </p>
            </div>
            <div className="btn-container">
                <div>
                    <button className="question-btn" onClick={()=> {
                        getNextQuestion(q.qNo,1);
                    }}>1. {q.btn1}</button>
                </div>
                <div>
                    <button className="question-btn" onClick={()=> {
                        getNextQuestion(q.qNo,-1);
                    }}>2. {q.btn2}</button>
                </div>
            </div>
        </div>
    })

    return (
        <div className="slider-container">
            <div className="slider">
                    {questionArr}
            </div>
        </div>
    );
};

export default QuestionList;