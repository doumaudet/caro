import React, { Component } from 'react';

class Q4 extends Component {
    state = {
        reponse: null,
        try: 0
    }

    handleForm = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handle = () => {
        if (this.state.reponse === "3") {
            this.props.setQuestionS(4)
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
                    <p>4 - Qu'elle est le nombre de cadrans dans les chambres de la maison ?</p>
                    <input type="number" name="reponse" onChange={this.handleForm} />
                    <p></p>
                </form>

                <button onClick={this.handle}>Vérifier</button>
            </div>
        );
    }
}

export default Q4;