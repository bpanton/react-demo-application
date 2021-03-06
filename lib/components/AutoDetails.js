import React from 'react';
import Generic from './img/cars/car_generic.jpg';
import Mustang from './img/cars/2017_Ford_Mustang_Front.jpg';
import Corvette from './img/cars/1967_Chevy_Corvette_Side.jpg'
import Camaro from './img/cars/1968_Chevy_Camaro_Side.jpg'
import Gremlin from './img/cars/1977_AMC_Gremlin.jpg'

class AutoDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            car: Generic
        };
    }

    componentDidMount() {
        switch(this.props.auto.model_name) {
            case 'Mustang':
                this.setState({car: Mustang});
                break;
            case 'Corvette':
                this.setState({car: Corvette});
                break;
            case 'Camaro':
                this.setState({car: Camaro});
                break;
            case 'Gremlin':
                this.setState({car: Gremlin});
                break;
            default:
                this.setState({car: Generic});
                break;
          }
    }
    
    componentWillUnmount () {
        this.setState({car: Generic});
    }

    render() {
        return (
            <div>
                <div className='auto-specs'>
                <img className="car-img" src={ this.state.car } alt='Car'/><br/>
                    <table className='model-table'>
                        <tbody>
                            <tr>
                                <td className='label'>Year</td>
                                <td>{this.props.auto.model_year}</td>
                            </tr>
                            <tr>
                                <td className='label'>Make</td>
                                <td>{this.props.auto.make_display}</td>
                            </tr>
                            <tr>
                                <td className='label'>Model</td>
                                <td>{this.props.auto.model_name}</td>
                            </tr>
                            <tr>
                                <td className='label'>Trim</td>
                                <td>{this.props.auto.model_trim}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='spec-table'>
                        <tbody>
                            <tr>
                                <th className='label auto-display-name' colSpan="2">Auto Details for {this.props.auto.displayName}</th>
                            </tr>
                            <tr>
                                <td>Country:</td>
                                <td>{this.props.auto.make_country}</td>
                            </tr>
                            <tr>
                                <td>Time 0-100KPH:</td>
                                <td>{this.props.auto.model_0_to_100_kph}</td>
                            </tr>
                            <tr>
                                <td>Body:</td>
                                <td>{this.props.auto.model_body}</td>
                            </tr>
                            <tr>
                                <td>Doors:</td>
                                <td>{this.props.auto.model_doors}</td>
                            </tr>
                            <tr>
                                <td>Drive:</td>
                                <td>{this.props.auto.model_drive}</td>
                            </tr>
                            <tr>
                                <td>Engine Bore:</td>
                                <td>{this.props.auto.model_engine_bore_mm}</td>
                            </tr>
                            <tr>
                                <td>Engine CC:</td>
                                <td>{this.props.auto.model_engine_cc}</td>
                            </tr>
                            <tr>
                                <td>Engine Compression:</td>
                                <td>{this.props.auto.model_engine_compression}</td>
                            </tr>
                            <tr>
                                <td>Engine Cylinder:</td>
                                <td>{this.props.auto.model_engine_cyl}</td>
                            </tr>
                            <tr>
                                <td>Engine Fuel:</td>
                                <td>{this.props.auto.model_engine_fuel}</td>
                            </tr>
                            <tr>
                                <td>Engine Position:</td>
                                <td>{this.props.auto.model_engine_position}</td>
                            </tr>
                            <tr>
                                <td>Engine Power (PS):</td>
                                <td>{this.props.auto.model_engine_power_ps}</td>
                            </tr>
                            <tr>
                                <td>Engine Power (RPM):</td>
                                <td>{this.props.auto.model_engine_power_rpm}</td>
                            </tr>
                            <tr>
                                <td>Engine Stroke (mm):</td>
                                <td>{this.props.auto.model_engine_stroke_mm}</td>
                            </tr>
                            <tr>
                                <td>Engine Torque (nm):</td>
                                <td>{this.props.auto.model_engine_torque_nm}</td>
                            </tr>
                            <tr>
                                <td>Engine Torque (RPM):</td>
                                <td>{this.props.auto.model_engine_torque_rpm}</td>
                            </tr>
                            <tr>
                                <td>Engine Type:</td>
                                <td>{this.props.auto.model_engine_type}</td>
                            </tr>
                            <tr>
                                <td>Valves Per Cylinder:</td>
                                <td>{this.props.auto.model_engine_valves_per_cyl}</td>
                            </tr>
                            <tr>
                                <td>Length (mm):</td>
                                <td>{this.props.auto.model_length_mm}</td>
                            </tr>
                            <tr>
                                <td>LPKM (City):</td>
                                <td>{this.props.auto.model_lkm_city}</td>
                            </tr>
                            <tr>
                                <td>LPKM (Highway):</td>
                                <td>{this.props.auto.model_lkm_hwy}</td>
                            </tr>
                            <tr>
                                <td>LPKM (Mixed):</td>
                                <td>{this.props.auto.model_lkm_mixed}</td>
                            </tr>
                            <tr>
                                <td>Seats:</td>
                                <td>{this.props.auto.model_seats}</td>
                            </tr>
                            <tr>
                                <td>Transmission Type:</td>
                                <td>{this.props.auto.model_transmission_type}</td>
                            </tr>
                            <tr>
                                <td>Weight (kg):</td>
                                <td>{this.props.auto.model_weight_kg}</td>
                            </tr>
                            <tr>
                                <td>Wheel Base (mm):</td>
                                <td>{this.props.auto.model_wheelbase_mm}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default AutoDetails;