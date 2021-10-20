import enUsMsg from "../lang/questions/en-US.json";
import koMsg from "../lang/questions/ko.json";
import jpMsg from "../lang/questions/jp.json";
import zhMsg from "../lang/questions/zh.json";
import enUsActor from "../lang/results/en-US.json"
import koActor from "../lang/results/ko.json"
import jpActor from "../lang/results/jp.json"
import zhActor from "../lang/results/zh.json"
import enUsMain from "../lang/main/en-US.json"
import koMain from "../lang/main/ko.json"
import jpMain from "../lang/main/jp.json"
import zhMain from "../lang/main/zh.json"

const questionService = ()=>{
    let func;
    let researchFunc;

    const getMainText  = ()=>{
        const locale = localStorage.getItem("locale") ?? "ko";
        const mainTextList = { "en-US": enUsMain, ko: koMain, jp: jpMain, zh: zhMain }[locale] ?
            { "en-US": enUsMain, ko: koMain, jp: jpMain, zh: zhMain }[locale]:
            "ko";
        return mainTextList;
    }

    const getActor = ()=>{
        const locale = localStorage.getItem("locale") ?? "ko";
        const actorList = { "en-US": enUsActor, ko: koActor, jp: jpActor, zh: zhActor }[locale] ?
            { "en-US": enUsActor, ko: koActor, jp: jpActor, zh: zhActor }[locale]:
            "ko";
        return actorList;

    }

    const getQuestions = ()=>{
        const locale = localStorage.getItem("locale") ?? "ko";
        const questionList = { "en-US": enUsMsg, ko: koMsg, jp: jpMsg, zh: zhMsg }[locale] ?
            { "en-US": enUsMsg, ko: koMsg, jp: jpMsg, zh: zhMsg }[locale]:
            "ko";
        return questionList.data;
    }

    const addRoundFunction = (f)=>{
        func = f;
    }

    const addRound = (round)=>{
        func(round);
    }

    const setResearchFunc = (f)=>{
        researchFunc = f;
    }

    const getResearchFunc = ()=>{
        return researchFunc();
    }


    return {getQuestions, addRoundFunction, addRound, setResearchFunc, getResearchFunc, getActor, getMainText}
}

export default questionService();