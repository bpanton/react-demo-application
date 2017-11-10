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
            transcript : '',
            autoInFocus: ''
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
    };

    render() {
        return (
             <div>
                 <p className="banner, attention">CSS Ignite Application</p>
                <div>
                    <VoiceToText autoData={this.recieveAutoInformation} autoArray={this.state.autoData} setAutoID={this.setAutoID} />
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