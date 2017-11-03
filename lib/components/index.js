import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                Hello - Basic React Application 
            </div>
        );
    }
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);