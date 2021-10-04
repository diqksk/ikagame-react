import { useScript } from "../hooks/hooks";
import {useEffect} from "react";
import kakaoimg from '../kakaotalk.png'

const KakaoBtn = () => {

    const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");

    useEffect(() => {
        if (status === "ready" && window.Kakao) {
            // 중복 initialization 방지
            if (!window.Kakao.isInitialized()) {
                // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
                window.Kakao.init(process.env.REACT_APP_API_KEY);
            }
        }
    }, [status]);

    const handleKakaoButton = () => {
        window.Kakao.Link.sendScrap({
            requestUrl: "http://www.quizi.co.kr",
        });
    };

    return (
        <>
            <button className="kakao-btn" onClick={handleKakaoButton} ><img src={kakaoimg} alt="" className="sns-logo"/> 카카오톡 공유하기</button>
        </>
    );
};

export default KakaoBtn;