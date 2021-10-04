import logo from './logo.svg';
import './App.css';
import Main from "./mainPage/Main";
import Question from "./mainPage/Question";
import MainQuestion from "./mainPage/MainQuestion";
import {Route}  from 'react-router-dom';
import Result from "./mainPage/Result";

function App() {
  return (
    <div className="App">
        <div>
            <Route path={"/"} component={MainQuestion} exact={true}></Route>
            <Route path={"/result"} component={Result}></Route>
        </div>
    </div>
  );
}

export default App;
