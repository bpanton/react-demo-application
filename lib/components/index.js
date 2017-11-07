import CarQueryApi from './CarQueryApi';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
           
            <div>
                Hello - Basic React DEMO 
            </div>
           
           <div> 
               <CarQueryApi />
           </div>
           
           </div>
        );
    }
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);