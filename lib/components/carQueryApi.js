import React from 'react';
import jquery from 'jquery';
import './styles/carQueryApiStyle.css';

const carQueryEndpoint = 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=';

class CarQueryApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            makes: [],
            models: [],
            trims: [],
            autoInFocus: ''
        };
        this.space = ' ';
        this.trimMessage = '';
    }

    componentDidMount() {
        this.props.onRef(this);
    }

    componentWillUnmount() {
        this.props.onRef(undefined);
    }

    getTrims = (transcriptValue) => {
        this.setState({autoInFocus: ''});
        return new Promise((resolve) => {
        jquery.getJSON(carQueryEndpoint + 'getTrims&keyword=' + transcriptValue)
            .then((result) => {
                if (result) {
                    this.trimMessage = 'Here are the available trim packages';
                    let trims = result.Trims;
                    for (let index = 0; index < trims.length; index++) {
                        let stringID = trims[index].model_year + trims[index].model_make_display + trims[index].model_name + trims[index].model_trim;
                        let displayName = '';
                        if(transcriptValue.split(' ').length < 3) {
                            displayName += trims[index].model_year + ' ' + trims[index].model_make_display + ' ' + trims[index].model_name + ' '; 
                        }
                        displayName += (trims[index].model_trim != '') ? trims[index].model_trim : 'Standard';

                        trims[index].id = stringID;
                        trims[index].displayName = displayName;
                        resolve(result);
                    }

                    this.setState({'trims': trims});

                    this.props.returnTrims(this.state.trims);
                } else {
                    // extra error handling
                }
            })
            .catch((err) => {
                console.log(err);
            });
        });
    };

    setAutoInFocus = (autoInFocus) => {
        this.setState({autoInFocus: autoInFocus});
    }

    render() {
        return (
            <div>
               {this.trimMessage}
                <div>
                    <ol>
                        {this.state.trims.map((trim) => {
                            if (this.state.autoInFocus && trim.id === this.state.autoInFocus) {
                                return <li className="auto-in-focus" key={trim.id}>{trim.displayName}</li>;
                            } else {
                                return <li key={trim.id}>{trim.displayName}</li>;
                            }
                        })}
                    </ol>
                </div>
            </div>
        );
    }
}

export default CarQueryApi;
