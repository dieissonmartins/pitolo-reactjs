import React from 'react'

class App extends React.Component {
    render() {

        const mystyle = {
            color: "Green",
            backgroundColor: "lightBlue",
            padding: "10px",
            fontFamily: "Arial"
        };

        return (
            <div>
                <h1 style={mystyle}>Painel</h1>
            </div>
        )
    }
}

export default App