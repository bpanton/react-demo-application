
import React from 'react';
import { shallow, mount, done } from 'enzyme';
import VoiceToText  from '../components/voiceToText';

jest.mock('../components/SpeechRecognition');
import { ShortListen } from '../components/SpeechRecognition';

let voiceToText, mockReceiveAutoValue;

let transcript = {
    transcriptValue: '2008 Subaru Legacy',
    isCommandMatch: false,
    isSuccess: true
};

let mockReceiveAutoInformation = (transcript) => {
    return;
};

let mockSetAutoID = () => {
    return;
};

let state = {
    autoData: []
}

describe('voiceToText component', () => {

    beforeEach(() => {
        ShortListen.mockImplementation(() => {
            return new Promise((resolve) => {
                resolve(transcript);
            });
        });

        voiceToText = shallow(<VoiceToText autoData={mockReceiveAutoInformation} autoArray={mockSetAutoID} setAutoID={state.autoData}/>);
    });

    it('should render', () => {
        expect(voiceToText.length).toEqual(1);
    });

    it('should set transcript', () => {
        Promise.resolve(voiceToText.find('.middle').simulate('click'))
            .then(() => {
                expect(voiceToText.state().transcript).toEqual('2008 Subaru Legacy');
            });
    });

    it('should set autoID', () => {
        transcript.isCommandMatch = true;
        Promise.resolve(voiceToText.find('.middle').simulate('click'))
            .then(() => {
                expect(voiceToText.state().autoID).toEqual('2008 Subaru Legacy');
            });
    });

    it('should catch unrecognizable speech', () => {
        ShortListen.mockImplementation(() => {
            return new Promise((resolve, reject) => {
                reject(new Error);
            });
        });

        Promise.resolve(voiceToText.find('.middle').simulate('click'))
            .catch(() => {
                expect(voiceToText.state().transcript).toEqual('Could not recognize speech');
            });
    });
});