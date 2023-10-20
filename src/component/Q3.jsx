import React, { Component } from 'react';

class Q3 extends Component {
    state = {
        reponse: null,
        try: 0
    }

    handleForm = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handle = () => {
        if (this.state.reponse === "109") {
            console.log("bonne réponse")
            this.props.setQuestionS(3)
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
                    <label>3 - Qu'elle est le nombre préféré des vampires ?</label>
                    <input type="number" name="reponse" onChange={this.handleForm} />
                </form>

                <button onClick={this.handle}>Vérifier</button>
            </div>
        );
    }
}

export default Q3;