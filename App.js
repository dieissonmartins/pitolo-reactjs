import React, {Component} from 'react';

class App extends Component {
    render() {

        let titleStyle = {
            fontSize: '2em',
            fontFamily: 'Courier',
            color: '#003300'
        }

        let i = 5;

        return (
            <div>
                <h1 style={titleStyle}>Título</h1>
                <h2>Subtítulo</h2>
                <p data-description={'demo'}>Descrição</p>
                <span className={'hello'}>{25 + 20}</span>
                {/* This is a comment in JSX */}
                <span>{i === 1 ? "True!" : "False!"}</span>
            </div>
        );
    }
}

export default App;