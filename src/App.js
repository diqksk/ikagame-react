import './App.css';
import MainQuestion from "./mainPage/MainQuestion";
import {Route}  from 'react-router-dom';
import Result from "./mainPage/Result";

function App() {
    // let location = navigator.language;
    // if(navigator.language==="ko-KR") location = "ko";
    localStorage.setItem("locale","ko");
  return (
    <div className="App">
            <div>
                <Route path={"/result/:character?"} component={Result} exact={true}></Route>
                <Route path={"/"} component={MainQuestion} exact={true}></Route>
            </div>
    </div>
  );
}

export default App;
