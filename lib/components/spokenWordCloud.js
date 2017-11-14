import React from 'react';
import WordCloud from 'react-d3-cloud';
import './styles/styles.css';

const fontSizeMapper = (word) => Math.log2(word.value) * 4;
const font = 'Helvetica Neue, Helvetica, Arial, sans-serif';
let cloudData = [];

class SpokenWordCloud extends React.Component {

    constructor(props) {
        super(props);

        this.prepareCloudData = this.prepareCloudData.bind(this);
    }

    prepareCloudData (transcript) {

        let wordArray = [];

        if(transcript.length > 0) {
            const spokenWords = transcript.split(' ');

            for(let word of spokenWords) {
                const data = { 'text' : word, 'value': 100 };
                wordArray.push(data);
            }
        }

        cloudData = wordArray;
    }

    render() {

        this.prepareCloudData(this.props.wordCloudTranscript);

        return (
            <div style={{display: cloudData.length > 0 ? '' : 'none'}}>
                <p className="result">{cloudData.length < 3 ? 'You may want to refine your search... try speaking Year, Make, Model.' : 'You said:'}</p>
                <b><p className="result">{cloudData.length < 3 ? 'We heard:' : ''}</p></b>
                <WordCloud
                    data={cloudData}
                    fontSizeMapper={fontSizeMapper}
                    rotate={0}
                    width={400}
                    height={100}
                    font={font}
                />
            </div>
        );
    }
}

export default SpokenWordCloud;