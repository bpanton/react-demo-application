import React from 'react';
import jquery from 'jquery';

const carQueryEndpoint = 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=';

class CarQueryApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            makes: [],
            models: [],
            trims: []
        };
        this.space = ' ';
    }

    componentDidMount() {
       jquery.getJSON(carQueryEndpoint + 'getTrims&keyword=2013 Ford Mustang&sold_in_us=1')
             .then((result) => this.setState({ makes: result.Trims }));
             //to do, need error handling here
        this.props.onRef(this);
    }

    componentWillUnmount() {
        this.props.onRef(undefined);
    }

    getTrims = (transcriptValue) => {
        jquery.getJSON(carQueryEndpoint + 'getTrims&keyword=' + transcriptValue)
            .then((result) => {
                if (result) {
                    let trims = result.Trims;
                    for (let index = 0; index < trims.length; index++) {
                        trims[index].id = index;
                    }

                    this.setState({
                        'trims': this.state.trims.concat(trims)
                    });

                    this.props.returnTrims(this.state.trims);
                } else {
                    // extra error handling
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        return (
            <div>
                Here are the available trim packages.
                <div>{this.state.trims.map((trim) => { return <li key={trim.id}>{
                    trim.model_year
                    + this.space
                    + trim.model_make_display
                    + this.space 
                    + trim.model_name
                    + this.space
                    + trim.model_trim }
                    </li>; } )}</div>
            </div>
        );
    }
}

export default CarQueryApi;
