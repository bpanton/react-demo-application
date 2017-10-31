import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        answer: 50,
    }
    asyncFunc = () => {
        return Promise.resolve(45);
    };
    async componentDidMount() {
        this.setState({
            answer: await this.asyncFunc() 
        });
    }

    render() {
        return (
            <div>
                Hello - Basic React Application -- {this.state.answer}
            </div>
        );
    }
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);