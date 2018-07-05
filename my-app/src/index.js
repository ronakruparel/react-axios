import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/GetData';
import registerServiceWorker from './registerServiceWorker';
import Forminput from './components/Forminput';
import Navbar from './components/Navbar'
import Home from './components/Home'
import {BrowserRouter,Route} from "react-router-dom";
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <Navbar/>
                <Route path ="/" component={Home}/>
                <Route path="/getmovies" component={Header}/>
                <Route path="/addmovie" component={Forminput}/>
            </div>
            </BrowserRouter>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
