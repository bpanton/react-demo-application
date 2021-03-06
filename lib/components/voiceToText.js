import React from 'react';
// import SpeechRecognition from './SpeechRecognition';
import { ShortListen } from './SpeechRecognition';
import SpokenWordCloud from './SpokenWordCloud';
import './styles/styles.css';
import microphone from './img/vintagemicrophone.jpg';

class VoiceToText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transcript: '',
            autoID: ''
        };
    }

    getNoCommandShortListen = () => {
        this.clearTranscript();

        ShortListen(this.props.autoArray)
            .then((returnTranscript) => {
                if (returnTranscript.isSuccess) {
                    if (!returnTranscript.isCommandMatch) {
                        this.setState({
                            transcript: returnTranscript.transcriptValue,
                        });
                        this.props.autoData(this.state.transcript);
                    } else {
                        this.setState({
                            autoID: returnTranscript.transcriptValue
                        });
                        this.props.setAutoID(this.state.autoID);
                    }
                }
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
        const micText = this.props.autoArray.length == 0  ? 'vehicle year, make and model' : '\'Show number\' or \'New search \''
        return (
            <div>
                <div className="container">
                    <img className="image" src={ microphone } alt='vintage microphone' /><br/>
                    <div className="middle" onClick={this.getNoCommandShortListen}>
                        <div className="text"><p>Click mic to start...<br/>then speak:<br/>{micText}</p></div>
                    </div>
                    <p className="padLeft">Tell us about your vehicle</p>   
                </div>
                <div>
                    <SpokenWordCloud wordCloudTranscript={this.props.wordCloudTranscript}/>
                </div>
            </div>
        );
    }
}

export default VoiceToText;
