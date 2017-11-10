import React from 'react';
import SpeechRecognition from './SpeechRecognition';
import SpokenWordCloud from './SpokenWordCloud';
import './styles/styles.css';
import microphone from './img/vintagemicrophone.jpg';

class VoiceToText extends React.Component {
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
                this.props.autoData(this.state.transcript);
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
        return (
            <div>
                <div className="container">
                    <img className="image" src={ microphone } alt='vintage microphone' /><br/>
                    <div className="middle" onClick={this.getNoCommandShortListen}>
                        <div className="text"><p>Click then... <br/> speak vehicle year, make &amp; model</p></div>
                    </div>
                    <p className="padLeft">Step on up to the microphone and tell us about your vehicle</p>   
                </div>
                <div>
                    <SpokenWordCloud transcript={this.state.transcript}/>
                </div>
            </div>
        );
    }
}

export default VoiceToText;
