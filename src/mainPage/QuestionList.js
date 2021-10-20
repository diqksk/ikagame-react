import React, {useState} from 'react';
import questionService from "../service/questionService";



const QuestionList = ({history}) => {
    const [userResearch,setUserResearch] = useState({})
    const questions = questionService.getQuestions();

    const getUserResearch = ()=>{
        return userResearch;
    }

    questionService.setResearchFunc(getUserResearch);

    const getNextQuestion = (qNo, result)=>{
        const key = "q"+qNo;
        const value = result

        setUserResearch({...userResearch,[key]:value});

        setTimeout(()=>{
            document.querySelector(".slider").style.transform = `translate(-${qNo*100}vw)`;
            document.querySelector(".progress-bar").style.width = `calc(${qNo*100}%/12)`;
            if(qNo<12)
            questionService.addRound(qNo+1);
        },350)

        if(qNo === 12) {
            document.querySelector(".modal-container").style.zIndex = 9999;
            document.querySelector(".modal-container").style.opacity = 1;
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