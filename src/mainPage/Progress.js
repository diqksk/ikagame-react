import React, {useEffect, useState} from 'react';
import questionService from "../service/questionService";

const Progress = () => {
    const [round, setRound]=useState(1);

    useEffect(()=>{
        questionService.addRoundFunction(setRound);
    },[])
    return (
        <div>
            <div className="progress-container">
                <div className="progress-text">({round}/12)</div>
                <div className="progress">
                    <div className="progress-bar"></div>
                </div>
            </div>
        </div>
    );
};

export default Progress;