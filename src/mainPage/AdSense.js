import React, {useEffect} from 'react';

const AdSense = ({position,slot}) => {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8541736668427695";
    script1.crossorigin="anonymous"

    const ins = document.createElement("ins");
    ins.className="adsbygoogle";
    ins.style="display:block";
    ins.setAttribute("data-ad-client","ca-pub-8541736668427695")
    ins.setAttribute("data-ad-slot", `${slot}`)
    ins.setAttribute("data-ad-format","auto")
    ins.setAttribute("data-full-width-responsive","true")

    const script2 = document.createElement("script");
    script2.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});"

    useEffect(()=>{
        document.querySelector(`.adsense-${position}`).appendChild(script1);
        document.querySelector(`.adsense-${position}`).appendChild(ins);
        document.querySelector(`.adsense-${position}`).appendChild(script2);
    },[])

    return (
        <div className={`adsense-${position}`}>

        </div>
    );
};

export default AdSense;