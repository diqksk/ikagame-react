import React from 'react';
import twitterLogo from '../twitter.png';
import facebookLogo from '../facebook.png';
import linkLogo from '../link-icon.png'
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

const ShareBtn = ({sns}) => {
    const sharePage = ()=>{
        if(sns === "Twitter"){
           window.open('https://twitter.com/intent/tweet?text=오징어게임으로 알아보는 심리테스트&url=http://www.quizi.com','_blank')
        }else{
            window.open('https://www.facebook.com/sharer/sharer.php?u=http://www.quizi.com','_blank')
        }
    }

    const currentUrl = window.location.href;

    return (
        <>
            {
                sns === "link"?
                    <CopyToClipboard text={currentUrl}>
                        <button  className={"share-btn"}><img src={linkLogo} alt="" className="sns-logo"/>  링크 복사하기</button>
                    </CopyToClipboard>
                    :
                    <button onClick={sharePage}
                     className={"share-btn " + (sns === "Twitter" ? "twitter-btn" : "facebook-btn")}>
                <img src={sns === "Twitter" ? twitterLogo : facebookLogo} alt="" className={"sns-logo"}/> {sns} 공유하기
            </button>
                }
        </>
    );
};

export default ShareBtn;