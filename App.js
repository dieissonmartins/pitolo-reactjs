import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    "name": 'Dieisson'
                },
                {
                    "name": 'Maria'
                },
                {
                    "name": 'João'
                },
                {
                    "name": 'Hulk'
                }
            ]
        }

    }

    render() {
        return (
            <div>
                <Title/>
                <SubTitle/>
                <Description/>
                <Sum/>
                <Bool/>
                <PeoplesName/>
                <ul>
                    {this.state.data.map((item) => <ListPeople data={item}/>)}
                </ul>
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

class PeoplesName extends Component {
    render() {
        return (
            <div>
                <h1>Lista de pessoas</h1>
            </div>
        );
    }
}

class ListPeople extends Component {
    render() {
        return (
            <ul>
                <li>{this.props.data.name}</li>
            </ul>
        );
    }
}


export default App;