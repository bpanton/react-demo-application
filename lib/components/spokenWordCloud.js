import React from 'react';
import WordCloud from 'react-d3-cloud';
import './styles/styles.css';

const fontSizeMapper = word => Math.log2(word.value) * 4;
const font = "Helvetica Neue, Helvetica, Arial, sans-serif";

class SpokenWordCloud extends React.Component {

    constructor(props) {
        super(props);

        this.prepareCloudData = this.prepareCloudData.bind(this);

        this.state = { cloudData : [] };
    }

    prepareCloudData (transcript) {
        const spokenWords = transcript.split(" ");
        let wordArray = [];
        for(let word of spokenWords) {
            const data = { 'text' : word, 'value': 100 };
            wordArray.push(data);
        }

        this.state.cloudData = wordArray;
    }

    render() {
        if(this.props.transcript.length > 0) {
            this.prepareCloudData(this.props.transcript);
        } else {
            this.state.cloudData = [];
        }
        return (
            <div style={{display: this.state.cloudData.length > 0 ? '' : 'none'}}>
                <p className="result">{this.state.cloudData.length < 3 ? 'You may want to refine your search... try speaking Year, Make, Model.' : 'You said:'}</p>
                <b><p className="result">{this.state.cloudData.length < 3 ? 'We heard:' : ''}</p></b>
                <WordCloud
                    data={this.state.cloudData}
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