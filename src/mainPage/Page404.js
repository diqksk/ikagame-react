import React from 'react';
import {useHistory} from "react-router-dom";

const Page404 = () => {

    const history = useHistory();
    const goMain = ()=>{
        history.push('/');
    }
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center", width:"100vw",height:"100vh"}}>
            <div>
                <h1>페이지가 없습니다..</h1>
                    <button className="share-btn" onClick={goMain}>메인으로 돌아가기</button>
            </div>
        </div>
    );
};

export default Page404;