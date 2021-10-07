import React from 'react';
import actor from '../researchInfo/result.json'
import KakaoBtn from "./KakaoBtn";
import ShareBtn from "./ShareBtn";
import retryLogo from "../retry.png"
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";


const Result = ({history, match}) => {

    let actorName= "ilnahm";
    let img = ""

    if(!match.params || !actor[match.params.character])
        history.push("/")
    else{
        actorName = match.params.character;
        img = require(`../actor/${actorName}.png`).default;
    }

    return (
        <div>
            <Helmet>
                <title>오징어게임 인물검사 결과 [{ match.params?.character ? actor[match.params?.character].name : "결과 준비중"}]</title>
                <meta name="description" content={`당신과 비슷한 오징어게임 인물은?? ${actor[actorName].name}!`}/>
                <meta name="keywords" content={'오징어게임'}/>
                <meta property={"og:type"} content={"오징어 인물검사 결과"}/>
                <meta property={"og:description"} content={`당신과 비슷한 오징어게임 인물은?? ${actor[actorName].name}!`}/>
                <meta property={"og:image"} content={img}/>
            </Helmet>
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
                            <ShareBtn sns={"link"}></ShareBtn>
                        </div>
                        <div>
                            <Link to={"/result"} className="share-btn retry-btn"><img src={retryLogo} alt=""/> 다시 한번 더?</Link>
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