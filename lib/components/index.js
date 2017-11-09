import CarQueryApi from './CarQueryApi';
import VoiceToText from './VoiceToText';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
             <div>
                 <p className="banner, attention">CSS Ignite Application</p>
                <div>
                    <VoiceToText />
                </div>
                <div> 
                    <CarQueryApi />
                </div>           
           </div>
        );
    }
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);