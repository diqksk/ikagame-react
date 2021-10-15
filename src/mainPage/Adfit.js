import React, {useEffect} from 'react';

const Adfit = ({width,height,unit,scrFlag,position}) => {
    let ins = document.createElement('ins');
    let scr;
    if(scrFlag===true) {
        scr = document.createElement('script');
        scr.async = 'true';
        scr.type = "text/javascript";
        scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    }

    ins.className = 'kakao_ad_area';
    ins.style = "display:none; width:100%;";
    ins.setAttribute('data-ad-width', `${width}`);
    ins.setAttribute('data-ad-height', `${height}`);
    ins.setAttribute('data-ad-unit', `DAN-${unit}`);

    useEffect(()=>{
        document.querySelector(`.adfit-${position}`).appendChild(ins);
        if(scrFlag)
            document.querySelector(`.adfit-${position}`).appendChild(scr);
    },[])


    return (
        <div>
            <div className={`adfit-${position}`}></div>
        </div>
    );
};

export default Adfit;