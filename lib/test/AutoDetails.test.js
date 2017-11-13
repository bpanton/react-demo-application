
import React from 'react';
import { shallow } from 'enzyme';
import AutoDetails from '../components/AutoDetails.js';

let autoDetails;

const mockAuto = {
    'displayName': '2008 Subaru Legacy 2.0 G',
    'model_year': 2008,
    'make_display': 'Subaru',
    'model_name': 'Legacy',
    'model_trim': '2.0 G',
    'model_engine_power_ps': null
};

describe('AutoDetails component', () => {

    beforeEach(() => {
        autoDetails = shallow(<AutoDetails auto={mockAuto} />);
    });

    it('should render', () => {
        expect(autoDetails.length).toEqual(1);
    });

    it('should set the auto display name from props', () => {
        let displayedValue = 'Auto Details for ' + mockAuto.displayName;
        let displayName = autoDetails.find('.auto-display-name').text();

        expect(displayName).toEqual(displayedValue);
    });
});
