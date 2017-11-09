import React from 'react';
import jquery from 'jquery';

const carQueryEndpoint = 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=';

class CarQueryApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            makes: [],
            models: []
        };
    }

    componentDidMount() {
       jquery.getJSON(carQueryEndpoint + 'getTrims&keyword=2013 Ford Mustang&sold_in_us=1')
             .then((result) => this.setState({ makes: result.Trims }));
             //to do, need error handling here
    }

    render() {
        return (
            <div>
                Here are the available trim packages.
                <div>{this.state.makes.map((make) => { return <li key={make.model_id}>{ make.model_year + make.model_make_display + make.model_name + make.model_trim }</li>; } )}</div>
            </div>
        );
    }
}

export default CarQueryApi;
