import CarQueryApi from './CarQueryApi';
import VoiceToText from './VoiceToText';
import AutoDetails from './AutoDetails';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            autoData : [],
            transcript : '',
            autoInFocus: '',
            auto: {}
        };
    }

    recieveAutoInformation = (values) => {
        this.setState({transcript: values});
        this.carQuery.getTrims(this.state.transcript);
    };

    setTrims = (trims) => {
        this.setState({autoData: trims});
    };

    setAutoID = (id) => {
        this.setState({autoInFocus: id});
        this.carQuery.setAutoInFocus(this.state.autoInFocus);

        let autoMatch = this.state.autoData.filter((obj) => {
            return obj.id === this.state.autoInFocus;
        })[0];

        for (let prop in autoMatch) {
            autoMatch[prop] = autoMatch[prop] || 'Not Available';
        }

        this.setState({auto: autoMatch});
    };

    render() {
        return (
            <div className='content'>
                <p className="banner attention">Cartalk</p>
                <div className="voice-to-text">
                    <VoiceToText autoData={this.recieveAutoInformation} autoArray={this.state.autoData}
                                    setAutoID={this.setAutoID}/>
                </div>
                <div className='auto-data-list'>
                    <CarQueryApi
                        autoData={this.state.autoData}
                        onRef={(ref) => (this.carQuery = ref)}
                        returnTrims={this.setTrims}
                    />
                </div>
                <div className="auto-details">
                    {(this.state.auto.id) && <AutoDetails auto={this.state.auto}/>}
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