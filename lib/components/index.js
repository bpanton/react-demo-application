import CarQueryApi from './CarQueryApi';
import VoiceToText from './VoiceToText';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            autoData : [],
            transcript : ''
        };
    }

    recieveAutoInformation = (values) => {
        this.setState({transcript: values});
        this.carQuery.getTrims(this.state.transcript);
    };

    setTrims = (trims) => {
        this.setState({autoData: trims});
    };

    render() {
        return (
             <div>
                 <p className="banner, attention">Cartalk</p>
                <div>
                    <VoiceToText autoData={this.recieveAutoInformation} />
                </div>
                <div> 
                    <CarQueryApi
                        autoData={this.state.autoData}
                        onRef={(ref) => (this.carQuery = ref)}
                        returnTrims={this.setTrims}
                    />
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