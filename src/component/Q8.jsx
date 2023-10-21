import React, { Component } from 'react';

class Q8 extends Component {
    state = {
        reponse: null,
        try: 0
    }

    handleForm = (event) => {
        console.log("tu va lA'voir")
        this.setState({ [event.target.name]: event.target.value });
    }

    handle = () => {
        if (this.state.reponse === "Souper a La Fut") {
            this.props.setQuestionS(8)
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
                    <p>8 - Décode et inscrit le message caché avec les espace.</p>
                    <input type="texte" name="reponse" onChange={this.handleForm} />
                    <p></p>
                </form>
                <label>Selon la table d'encryption suivante.</label>
                <p>481069 3 23 715</p>
                <button onClick={this.handle}>Vérifier</button>
                <p></p>
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

export default Q8;