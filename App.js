import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
            clique: 'Dieisson Martins dos Santos',
            displayBio: true,
            msg: "Mensagem do estado"
        }

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);

        this.handleEvent = this.handleEvent.bind(this);

        this.updateSetState = this.updateSetState.bind(this);

        this.updateSubmit = this.updateSubmit.bind(this);

        this.input = React.createRef();
    }

    toggleDisplayBio() {
        this.setState({
            displayBio: !this.state.displayBio
        });
    }

    handleEvent() {
        console.log(this.props);
    }

    updateSetState() {
        this.setState({
            msg: "Mensagem do estado atualizada"
        });
    }

    updateSubmit(event) {
        alert('Cadastro realizado com sucesso!');
        event.preventDefault();
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
                <hr/>
                <PropsTypesC
                    propArray={this.props.propArray}
                    propBool={this.props.propBool}
                    propFunc={this.props.propFunc}
                    propString={this.props.propString}
                    propNumber={this.props.propNumber}
                />
                <hr/>
                <input type="text" value={this.state.clique}/>
                <button onClick={this.handleEvent}>Clique aqui...</button>
                <p> Name: {this.props.name}</p>
                <hr/>
                <h1>{this.state.msg}</h1>
                <button onClick={this.updateSetState}>Atualiza State</button>
                <hr/>
                <h3>Formulário</h3>
                <form onSubmit={this.updateSubmit}>
                    <h1>Cadastro handle</h1>
                    <label>Nome:
                        <input type="text" ref={this.input}/>
                    </label>
                    <label>
                        Sobrenome:
                        <input type="text" ref={this.input}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
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

class PropsTypesC extends Component {
    render() {
        return (
            <div>
                <h1>Typos de propiedades</h1>
                <table>
                    <tbody>
                    <tr>
                        <th>Tipo</th>
                        <th>Valor</th>
                        <th>É Valido</th>
                    </tr>
                    <tr>
                        <td>Array</td>
                        <td>{JSON.stringify(this.props.propArray)}</td>
                        <td>{Array.isArray(this.props.propArray) ? "true" : "false"}</td>
                    </tr>
                    <tr>
                        <td>Boolean</td>
                        <td>{this.props.propBool ? "true" : "false"}</td>
                        <td>{typeof this.props.propBool === 'boolean' ? "true" : "false"}</td>
                    </tr>
                    <tr>
                        <td>Function</td>
                        <td>{this.props.propFunc(5)}</td>
                        <td>{this.props.propFunc(5) ? "true" : "False"}</td>
                    </tr>
                    <tr>
                        <td>String</td>
                        <td>{this.props.propString}</td>
                        <td>{this.props.propString ? "true" : "False"}</td>
                    </tr>
                    <tr>
                        <td>Number</td>
                        <td>{this.props.propNumber}</td>
                        <td>{this.props.propNumber ? "true" : "False"}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

App.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
};

App.defaultProps = {
    surname: "Martins dos Santos",
    propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function (x) {
        return x + 5
    },
    propNumber: 1,
    propString: "JavaTpoint"
}

export default App;