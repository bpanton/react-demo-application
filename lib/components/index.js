import CarQueryApi from './CarQueryApi';
import React from 'react';
import ReactDOM from 'react-dom';
import SpeechRecognition from './SpeechRecognition';
import annyang from 'annyang';
import './styles/styles.css';


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
                <p className="banner">CSS Ignite Application</p>
                <div className="container">
                    <img className="image" src='https://media.istockphoto.com/photos/vintage-microphone-picture-id480843686' alt='vintage microphone' /><br/>
                    <div className="middle" onClick={this.getNoCommandShortListen}>
                        <div className="text"><p>Click then... <br/> speak vehicle year, make &amp; model</p></div>
                    </div>
                </div>
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