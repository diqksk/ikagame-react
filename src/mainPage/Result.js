import React from 'react';
import actor from '../researchInfo/result.json'
import KakaoBtn from "./KakaoBtn";
import ShareBtn from "./ShareBtn";
import retryLogo from "../retry.png"


const Result = ({history,location}) => {

    let actorName= "ilnahm";
    let img = ""

    if(!location.props)
        history.push("/")
    else{
        actorName = location.props.result.data.msg;
        img = require(`../actor/${actorName}.png`).default;
    }


    return (
        <div>
            <div className="result-container">
                <h3>나의 오징어게임 캐릭터는?</h3>
                <div className="actor-info">
                    <p><span className="actor-no">{actor[actorName].no}</span></p>
                    <p><span className="actor-name">{actor[actorName].name}</span></p>
                </div>
                <div>
                    <img src={img} alt="" className="actor-image"/>
                </div>
                <div><span className="actor-quotes">{actor[actorName].quotes}</span></div>
                <div className="scripts">
                    <div className="simpleScript-div">
                        <ul>
                            <li>- {actor[actorName].simpleScript[0]}</li>
                            <li>- {actor[actorName].simpleScript[1]}</li>
                            <li>- {actor[actorName].simpleScript[2]}</li>
                        </ul>
                    </div>
                    <div className="interpret-div">
                        <span>{actor[actorName].detail}</span>
                    </div>
                    <div className="shareZone">
                        <div>이 게임을?</div>
                        <div>
                            <ShareBtn sns={"Twitter"}></ShareBtn>
                            <ShareBtn sns={"Facebook"}></ShareBtn>
                            <KakaoBtn></KakaoBtn>
                        </div>
                        <div>
                            <button onClick={()=>{
                                history.push("/")
                            }} className="share-btn retry-btn"><img src={retryLogo} alt=""/> 다시 한번 더?</button>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <span>DEVELOPED BY CHANWOO PARK<p>Email: diqksk@naver.com</p></span>
                </div>
            </div>
        </div>
    );
};

export default Result;