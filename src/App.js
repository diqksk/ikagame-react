import './App.css';
import MainQuestion from "./mainPage/MainQuestion";
import {Route}  from 'react-router-dom';
import Result from "./mainPage/Result";


function App() {
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
