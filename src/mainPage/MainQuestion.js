import React, {useState} from 'react';
import Main from "./Main";
import Question from "./Question";


const MainQuestion = ({history}) => {
    const [language, setLanguage]=useState("ko")

    const changeLang=(e)=>{
        localStorage.clear();
        localStorage.setItem("locale",e.target.value);
        setLanguage(e.target.value);
    }

    return (
        <div className="mainQuestion-div">
            <div className="header">
                <div>
                    <ul>
                        <li><button type={"button"} value={"ko"} onClick={changeLang}>한국어</button></li>
                        <li><button type={"button"} value={"zh"} onClick={changeLang}>中文</button></li>
                        <li><button type={"button"} value={"en-US"} onClick={changeLang}>Eng</button></li>
                        <li><button type={"button"} value={"jp"} onClick={changeLang}>日本語</button></li>
                    </ul>
                </div>
            </div>
            <Main></Main>
            <Question history={history}></Question>
            <div className="footer">
                <span>DEVELOPED BY CHANWOO PARK<p>Email: diqksk@naver.com</p></span>

            </div>
        </div>
    );
};

export default MainQuestion;