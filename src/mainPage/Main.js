import React, {useEffect, useState} from 'react';
import CountUp from "react-countup";
import countService from "../service/requestServer"
import questionService from "../service/questionService";

const initCount = {
    total:0,
    today:0
}
const Main = () => {
    const [counter, setCounter] = useState(initCount);
    const mainTexts = questionService.getMainText();
    useEffect(()=>{
        countService.getCount().then( result =>{
            setCounter({...result.data});
        })
    },[])

    const startResearch = ()=>{
        setTimeout(()=>{
            document.querySelector('.main-container').style.display = "none";
            document.querySelector('.slider-container').style.opacity = 1
        },500);
        document.querySelector('.main-container').style.opacity = 0

    }


    return (
        <div  className="main-container">
            <div>
                <div className="title-textdiv">
                    <span className="main-title">{mainTexts.mainTitle}</span>
                    <p className="sub-title">{mainTexts.subTitle}</p>
                </div>
                <div>
                    <img src="/picuture/title_logo.png" alt="squid-game"className="squid_logo" />
                </div>
            </div>
            <button className="test-btn" onClick={startResearch}>>> {mainTexts.testBtn}</button>
            <div className="counter-div">
                <p>{mainTexts.today} <span><CountUp delay={0.5} duration={1.5} start={0} end={counter.today} separator=","/></span>명</p>
                <p>{mainTexts.total} <span><CountUp duration={2.0} start={0} end={counter.total} separator=","/></span>명</p>
            </div>
        </div>
    );
};

export default Main;