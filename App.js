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
            ],
            displayBio: true
        }

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio() {
        this.setState({
            displayBio: !this.state.displayBio
        });
    }

    render() {

        const bio = this.state.displayBio ? "Aparece Bio" : "Não Aparece Bio";

        const buttonTitle = this.state.displayBio ? "Não Aparecer" : "Aparecer";

        return (
            <div>
                <h1> Bem vindo {this.props.name} {this.props.surname}!</h1>
                <hr/>
                <Title/>
                <hr/>
                <SubTitle/>
                <hr/>
                <Description/>
                <hr/>
                <Sum/>
                <hr/>
                <Bool/>
                <hr/>
                <PeoplesName/>
                <ul>
                    {this.state.data.map((item) => <ListPeople data={item}/>)}
                </ul>
                <hr/>
                <Bio bio={bio}/>
                <button onClick={this.toggleDisplayBio}>{buttonTitle}</button>
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

class Bio extends Component {
    render() {
        return (
            <h4>{this.props.bio}</h4>

        );
    }
}

App.defaultProps = {
    surname: "Martins dos Santos"
}

export default App;