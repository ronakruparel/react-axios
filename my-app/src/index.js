import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Forminput from './components/Forminput';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Forminput />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
