import React from 'react'
import WordCloud from 'react-d3-cloud';

const fontSizeMapper = word => Math.log2(word.value) * 5;
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
        }
        return (
            <div style={{display: this.state.cloudData.length > 0 ? '' : 'none'}}>
                <p className="attention">{this.state.cloudData.length < 3 ? 'We missed some of the information you provided. Please try again.' : 'You said:'}</p>
                <p className="attention closeGap">{this.state.cloudData.length < 3 ? 'We heard:' : ''}</p>
                <WordCloud
                    data={this.state.cloudData}
                    fontSizeMapper={fontSizeMapper}
                    rotate={0}
                    width={500}
                    height={100}
                    font={font}
                />
            </div>
        );
    }
}

export default SpokenWordCloud;