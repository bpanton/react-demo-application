import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        answer: 50,
    }
    render() {
        return (
            <div>
                Hello Again!! -- {this.state.answer}
            </div>
        );
    }
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);