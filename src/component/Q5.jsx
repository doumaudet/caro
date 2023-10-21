import React, { Component } from 'react';

class Q5 extends Component {
    state = {
        reponse: null,
        try: 0
    }

    handleForm = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handle = () => {
        if (this.state.reponse === "2") {
            this.props.setQuestionS(5)
        }
        else
        {
            this.setState((state) => ({
                try: state.try + 1
            }))
        }
    }

    render() {
        return (
            <div>
                {(this.state.try !== 0) ? <h2>Mauvaise réponse, essaye de nouveau</h2> : null}
                <form>
                    <p>5 - Combien de lumière de chambre papa peut-il ouvrir avec son téléphone ?</p>
                    <input type="number" name="reponse" onChange={this.handleForm} />
                    <p></p>
                </form>

                <button onClick={this.handle}>Vérifier</button>
            </div>
        );
    }
}

export default Q5;