import React, { Component } from 'react';

class Q1 extends Component {

    state = {
        reponse: null,
        try: 0
    }

    handleForm = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handle = () => {
        if (this.state.reponse === "5") {
            this.props.setQuestionS(1)
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
                    <p>1 - Qu'elle est le nombre de plante vivante dans la maison ?</p>
                    <input type="number" name="reponse" onChange={this.handleForm} />
                    <p></p>
                </form>

                <button onClick={this.handle}>Vérifier</button>
            </div>
        );
    }
}

export default Q1;