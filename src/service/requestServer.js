import axios from "axios";


const requestServer = ()=>{

    const getCount = async () =>{
        return await axios.get(process.env.REACT_APP_SERVER_URL,{ withCredentials: true });
    }

    const getResult =  async (researchResult) =>{
        return await axios.post(process.env.REACT_APP_SERVER_URL,researchResult);
    }

    return {getCount, getResult}
}

export default requestServer();