import CarQueryApi from './CarQueryApi';
import React from 'react';
import ReactDOM from 'react-dom';
import SpeechRecognition from './SpeechRecognition';
import annyang from 'annyang';


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            transcript: ''
        };

        this.speechRecognition = new SpeechRecognition();
    }

    getNoCommandShortListen = () => {
        this.speechRecognition.noCommandShortListen()
            .then((transcriptValue) => {
                this.setState({
                    transcript: transcriptValue
                });
            }).catch(() => {
                this.setState({
                    transcript: 'Could not recognize speech'
                });
            });
    };

    clearTranscript = () => {
        this.setState({transcript: ''});
    };

    render() {
        return (
             <div>
            <div>
                Hello - Basic React Application
                <button onClick={this.getNoCommandShortListen}>Test</button>
                <button onClick={this.clearTranscript}>Clear Text</button>
                <div>
                    You said: {this.state.transcript}
                </div>
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