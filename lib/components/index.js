import CarQueryApi from './CarQueryApi';
import React from 'react';
import ReactDOM from 'react-dom';
import WordCloud from 'react-d3-cloud';
import SpeechRecognition from './SpeechRecognition';
import annyang from 'annyang';
import './styles/styles.css';


class App extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            transcript: [],
            cloudData: []
        };

        this.speechRecognition = new SpeechRecognition();
    }
    

    getNoCommandShortListen = () => {
        this.clearTranscript();

        this.speechRecognition.noCommandShortListen()
            .then((transcriptValue) => {
                const spokenWords = transcriptValue.split(" ");
                let wordArray = [];
                for(let word of spokenWords) {
                    const data = { 'text' : word, 'value': 100 };
                    wordArray.push(data);
                }

                this.setState({
                    transcript: transcriptValue,
                    cloudData: wordArray
                });
            }).catch(() => {
                const unrecognizeable =  'Could not recognize speech';
                this.setState({                
                    transcript: unrecognizeable,
                    cloudData: unecognizeable.split(" ")
                });
            });
    };

    clearTranscript = () => {
        this.setState({transcript: ''});
        this.setState({cloudData:[]});
    };

    render() {
        const fontSizeMapper = (word) => Math.log2(word.value) * 5;
        const font = 'Helvetica Neue, Helvetica, Arial, sans-serif';
        const ifSpokenWords = (count) => renderIf(count > 0);
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
                
                    <div style={{display: this.state.cloudData.length > 0 ? '' : 'none'}}>
                        <p className="attention">{this.state.cloudData.length < 3 ? 'We missed some of the information you provided. Please try again.' : 'You said:'}</p>
                        <p className="attention closeGap">{this.state.cloudData.length < 3 ? 'We heard:' : ''}</p>
                        <WordCloud
                            data={this.state.cloudData}
                            fontSizeMapper={fontSizeMapper}
                            rotate={0}
                            width={400}
                            height={100}
                            font={font}
                        />
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