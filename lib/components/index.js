import CarQueryApi from './CarQueryApi';
import React from 'react';
import ReactDOM from 'react-dom';
import WordCloud from 'react-d3-cloud';
import SpokenWordCloud from './SpokenWordCloud';
import SpeechRecognition from './SpeechRecognition';
import annyang from 'annyang';
import './styles/styles.css';


class App extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            transcript: []
        };

        this.speechRecognition = new SpeechRecognition();
    }
    

    getNoCommandShortListen = () => {
        this.clearTranscript();

        this.speechRecognition.noCommandShortListen()
            .then((transcriptValue) => {
                this.setState({
                    transcript: transcriptValue,
                });
            }).catch(() => {
                const unrecognizeable =  'Could not recognize speech';
                this.setState({                
                    transcript: unrecognizeable,
                });
            });
    };

    clearTranscript = () => {
        this.setState({transcript: ''});
    };

    render() {
        const fontSizeMapper = word => Math.log2(word.value) * 5;
        const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
        return (
             <div>
                <div>
                    <p className="banner, attention">CSS Ignite Application</p>
                    <div className="container">
                        <img className="image" src='http://media.istockphoto.com/photos/vintage-microphone-picture-id480843686' alt='vintage microphone' /><br/>
                        <div className="middle" onClick={this.getNoCommandShortListen}>
                            <div className="text"><p>Click then... <br/> speak vehicle year, make &amp; model</p></div>
                        </div>
                        <p className="padLeft">Step on up to the microphone and tell us about your vehicle</p>   
                    </div>

                    <div>
                        <SpokenWordCloud transcript={this.state.transcript}/>
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