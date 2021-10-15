const questionList = [
    {qNo:1, question:"3연휴를 맞게된 당신! 당신의 연휴 계획은?", btn1:"다모여!!! 2박3일 친구들과 여행", btn2:"그동안 쌓인피로를 자면서 푼다"},
    {qNo:2, question:"저 멀리서 누군가 나에게 다가오는것이 보인다. 당신은?", btn1:"오면 오는거고 말면 마는거고~ 가던길 간다", btn2:"이동하던 경로를 바꾼다"},
    {qNo:3, question:"게임에 참가한 당신.. 누군가 내 식량을 배급받았다.", btn1:"어떤 XX야!! 당장 범인을 색출한다", btn2:"얼마나 배고프면 그랬겠어... 이번은 내가 굶는다"},
    {qNo:4, question:"집앞 건물에 불이나 사람들이 많이 죽었는데...", btn1:"소방설비 다시한거 봤으니까 평소처럼 다닌다", btn2:"혹시라도 모르니 재수없다.. 당분간은 피해다니자"},
    {qNo:5, question:"우연히 데스노트를 주워버렸다.. 당신은?", btn1:"우와... 이런게 진짜 있긴 있구나...", btn2:"머릿속에 그동안 미웠던 사람들이 지나간다"},
    {qNo:6, question:"시간을 때우기 위해 카페에 갔다. 무엇을 할까?", btn1:"재미있는 영상을 보며 활력을 충전한다", btn2:"그림을 그리거나 책을 가져와 읽는다"},
    {qNo:7, question:"카페에 간 당신! 털리고 있는 알바생을 봤는데 당신은?", btn1:"으휴 뭘 잘못했길레 저렇게 혼나냐", btn2:"일하는것도 힘들텐데 사장한테까지 불쌍해.."},
    {qNo:8, question:"핸드폰을 사러간 당신! 중요한것은?", btn1:"당연히 성능이랑 화면이지!", btn2:"일단 디자인이 이뻐야 살 마음이 생긴다구"},
    {qNo:9, question:"친구가 기대하던 시험에 합격했다. 내가 해줄 말은?", btn1:"우와 공부 진짜 열심히했네 축하해~", btn2:"너가 붙을줄 알았어! 나랑 치맥 콜?"},
    {qNo:10, question:"멀리있는 맛집으로 운전해 가려고한다. 당신은?", btn1:"근처에 아무데나 대면 되지~ 일단 출발한다", btn2:"주차공간 없으면 불편해... 가게에 먼저 전화해본다"},
    {qNo:11, question:"지금 당신의 책상은?", btn1:"지저분하다고 하지마, 나만의 규칙이 있어!", btn2:"깔끔 그자체 항상 사용한건 제자리에 둔다"},
    {qNo:12, question:"○△□가 적혀있는 명함을 받았다. 어떻게 할까?", btn1:"일단 전화부터 해본다.", btn2:"인터넷에서 같은 전화번호를 검색해본다."},
]

const questionService = ()=>{
    let func;
    let researchFunc;

    const getQuestions = ()=>{
        return questionList;
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


    return {getQuestions, addRoundFunction, addRound, setResearchFunc, getResearchFunc}
}

export default questionService();