import React, {useEffect, useState} from 'react';
import CountUp from "react-countup";
import { useCookies } from "react-cookie";
import countService from "../service/requestServer"

const initCount = {
    total:0,
    today:0
}
const Main = () => {
    const [counter, setCounter] = useState(initCount);

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
                    <span className="main-title">나와 맞는 오징어게임 참가자는?</span>
                    <p className="sub-title">오징어게임으로 알아보는 나의 성향!</p>
                </div>
                <div>
                    <img src="/picuture/title_logo.png" alt="squid-game"className="squid_logo" />
                </div>
            </div>
            <button className="test-btn" onClick={startResearch}>>> 테스트하러 가기</button>
            <div className="counter-div">
                <p>오늘 참여한 인원 <span><CountUp delay={0.5} duration={1.5} start={0} end={counter.today} separator=","/></span>명</p>
                <p>총 참여인원 <span><CountUp duration={2.0} start={0} end={counter.total} separator=","/></span>명</p>
            </div>
        </div>
    );
};

export default Main;