import React, {Component} from 'react';

class App extends Component {
    render() {

        var titleSyle = {
            fontSize: '2em',
            fontFamily: 'Courier',
            color: '#003300'
        }

        return (
            <div>
                <h1 style={titleSyle}>Título</h1>
                <h2>Subtítulo</h2>
                <p data-description={'demo'}>Descrição</p>
                <span className={'hello'}>{25 + 20}</span>
                {/* This is a comment in JSX */}
            </div>
        );
    }
}

export default App;