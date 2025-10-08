import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <Title/>
                <SubTitle/>
                <Description/>
                <Sum/>
                <Bool/>
            </div>
        );
    }
}

class Title extends Component {

    render() {

        let titleStyle = {
            fontSize: '2em',
            fontFamily: 'Courier',
            color: '#003300'
        }

        return (
            <h1 style={titleStyle}>Título</h1>
        );
    }
}

class SubTitle extends Component {
    render() {
        return (
            <h2>Subtítulo</h2>
        );
    }
}

class Description extends Component {
    render() {
        return (
            <p data-description={'demo'}>Descrição</p>
        );
    }
}

class Sum extends Component {
    render() {
        return (
            <span className={'hello'}>{25 + 20}</span>
        );
    }
}

class Comment extends Component {
    render() {
        return (
            {/* This is a comment in JSX */}
        );
    }
}

class Bool extends Component {
    render() {

        let i = 5;

        return (
            <span>{i === 1 ? "True!" : "False!"}</span>
        );
    }
}

export default App;