import React from 'react'
import styled from 'styled-components';

class App extends React.Component {
    render() {

        const mystyle = {
            color: "Green",
            backgroundColor: "lightBlue",
            padding: "10px",
            fontFamily: "Arial"
        };

        const Title = styled.h1`
            font-family: Arial,serif;
            font-size: 35px;
            text-align: center;
            color: palevioletred;
        `;

        return (
            <div>
                <h1 style={mystyle}>Painel</h1>
            </div>
        )
    }
}

export default App