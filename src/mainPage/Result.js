import React, {useState} from 'react';
// import actor from '../researchInfo/result.json'
import KakaoBtn from "./KakaoBtn";
import ShareBtn from "./ShareBtn";
import retryLogo from "../retry.png"
import {Helmet} from "react-helmet";
import Adfit from "./Adfit";
import questionService from "../service/questionService";
import AdSense from "./AdSense";


const Result = ({history, match}) => {
    const [language, setLanguage]=useState("ko")

    const changeLang=(e)=>{
        localStorage.clear();
        localStorage.setItem("locale",e.target.value);
        setLanguage(e.target.value);
    }
    let actorName= "ilnahm";
    let img = ""
    const actor = questionService.getActor();
    if(!match.params || !actor[match.params.character])
        history.push("/")
    else{
        actorName = match.params.character;
        img = require(`../actor/${actorName}.png`).default;
    }

    return (
        <div>
            <div className="header" style={{zIndex:9999}}>
                <div>
                    <ul>
                        <li><button type={"button"} value={"ko"} onClick={changeLang}>한국어</button></li>
                        <li><button type={"button"} value={"zh"} onClick={changeLang}>中文</button></li>
                        <li><button type={"button"} value={"en-US"} onClick={changeLang}>Eng</button></li>
                        <li><button type={"button"} value={"jp"} onClick={changeLang}>日本語</button></li>
                    </ul>
                </div>
            </div>
            <Helmet>
                <title>오징어게임 인물검사 결과 [{ match.params?.character ? actor[match.params?.character].name : "결과 준비중"}]</title>
                <meta name="description" content={`${localStorage.getItem("locale") === "ko" ?"당신과 비슷한 오징어게임 인물은??":"A squid game character similar to you "} ${actor[actorName].name}!`}/>
                <meta name="keywords" content={localStorage.getItem("locale") === "ko" ?'오징어게임':"Squid Game"}/>
                <meta property={"og:type"} content={localStorage.getItem("locale") === "ko" ?"오징어 인물검사 결과":"Squid-game character result"}/>
                <meta property={"og:description"} content={`${localStorage.getItem("locale") === "ko" ? "당신과 비슷한 오징어게임 인물은??" : "What is your Squid-game character "} ${actor[actorName].name}!`}/>
                <meta property={"og:image"} content={"https://www.quizi.co.kr/thumbnail-quizi.png"}/>
            </Helmet>
            <div className="result-container">

                <h3>{localStorage.getItem("locale") === "ko" ? "나의 오징어게임 캐릭터는?" : "What is my character!?"}</h3>
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
                    <div style={{margin:"25px 0"}}>
                        {/*<Adfit height={50} width={320} unit={"0gpGEGTBrQI97jVh"} scrFlag={true} position={"middle"}></Adfit>*/}
                        <AdSense position={"middle"} slot={"8166037771"}></AdSense>
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
                            <button onClick={()=>{history.push("/")}} className="share-btn retry-btn"><img src={retryLogo} alt=""/> {localStorage.getItem("locale") === "ko" ?"다시 한번 더?":"Retry?"}</button>
                        </div>

                    </div>
                    <AdSense position={"bottom"} slot={"6473326933"}></AdSense>
                    {/*<Adfit height={100} width={320} unit={"aYwbEJi6dW7uy5Ju"} scrFlag={false} position={"bottom"}></Adfit>*/}
                </div>
                <div className="footer">
                    <span>DEVELOPED BY CHANWOO PARK<p>Email: diqksk@naver.com</p></span>
                </div>
            </div>
        </div>
    );
};

export default Result;