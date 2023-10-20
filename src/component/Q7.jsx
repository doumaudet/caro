import React, { Component } from 'react';

class Q7 extends Component {
    state = {
        reponse: null,
        try: 0
    }

    handleForm = (event) => {
        console.log("tu va lA'voir")
        this.setState({ [event.target.name]: event.target.value });
    }

    handle = () => {
        if (this.state.reponse === "SouperaLaFut") {
            this.props.setQuestionS(7)
        }
        else {
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
                    <label>7 - Décode le message avec la table d'encryption et inscrit le message caché sans les espace.</label>
                    <input type="texte" name="reponse" onChange={this.handleForm} />
                </form>

                <button onClick={this.handle}>Vérifier</button>

                <table className='w-100 border'>
                    <tbody>{/*warning résolu : https://github.com/facebook/react/issues/5652*/}
                        <tr >
                            <td className='border'>
                                <h4>0</h4>
                            </td>
                            <td className='border'>
                                <h4>1</h4>
                            </td>
                            <td className='border'>
                                <h4>2</h4>
                            </td>
                            <td className='border'>
                                <h4>3</h4>
                            </td>
                            <td className='border'>
                                <h4>4</h4>
                            </td>
                            <td className='border'>
                                <h4>5</h4>
                            </td>
                            <td className='border'>
                                <h4>6</h4>
                            </td>
                            <td className='border'>
                                <h4>7</h4>
                            </td>
                            <td className='border'>
                                <h4>8</h4>
                            </td>
                            <td className='border'>
                                <h4>9</h4>
                            </td>
                        </tr>

                        <tr>
                            <td className='border'>
                                <h4>p</h4>
                            </td>
                            <td className='border'>
                                <h4>u</h4>
                            </td>
                            <td className='border'>
                                <h4>L</h4>
                            </td>
                            <td className='border'>
                                <h4>a</h4>
                            </td>
                            <td className='border'>
                                <h4>S</h4>
                            </td>
                            <td className='border'>
                                <h4>t</h4>
                            </td>
                            <td className='border'>
                                <h4>e</h4>
                            </td>
                            <td className='border'>
                                <h4>F</h4>
                            </td>
                            <td className='border'>
                                <h4>o</h4>
                            </td>
                            <td className='border'>
                                <h4>r</h4>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        );
    }
}

export default Q7;