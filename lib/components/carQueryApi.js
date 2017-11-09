import React from 'react';
//import jquery from 'jquery';

//const carQueryEndpoint = 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=';

class CarQueryApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            makes: [],
            models: []
        };
    }

    componentDidMount() {
        // jquery.getJSON(carQueryEndpoint + 'getMakes&year=2000&sold_in_us=1')
        //     .then((result) => this.setState({ makes: result }));

        var carquery = new CarQuery();
        //Run the carquery init function to get things started:
        carquery.init();
        carquery.setFilters({ 
            sold_in_us: true,
            keyword: '2013 Ford Mustang',
            min_year: '1960',
            max_year: '2017'
        });
        carquery.search();
    }

    render() {
        return (
            <div>
                CarqueryApi

            <div id='cq-search-results'>Search Results:</div>

            </div>
        );
    }
}

export default CarQueryApi;
