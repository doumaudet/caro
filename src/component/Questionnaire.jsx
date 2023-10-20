import React, { Component } from 'react';
import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Q4 from './Q4';
import Q5 from './Q5';
import Q6 from './Q6';
import Q7 from './Q7';

class Questionnaire extends Component {

    state = {
        nbQuestionReussit: 0
    }

    setQuestionSuccess = (nbQuestion) => {
        this.setState({ nbQuestionReussit: nbQuestion });
    }

    render() {
        let question
        if (this.state.nbQuestionReussit === 0)
            question = <Q1 setQuestionS={this.setQuestionSuccess}/>
        else if (this.state.nbQuestionReussit === 1)
            question = <Q2 setQuestionS={this.setQuestionSuccess}/>
        else if (this.state.nbQuestionReussit === 2)
            question = <Q3 setQuestionS={this.setQuestionSuccess}/>
        else if (this.state.nbQuestionReussit === 3)
            question = <Q4 setQuestionS={this.setQuestionSuccess}/>
        else if (this.state.nbQuestionReussit === 4)
            question = <Q5 setQuestionS={this.setQuestionSuccess}/>
        else if (this.state.nbQuestionReussit === 5)
            question = <Q6 setQuestionS={this.setQuestionSuccess}/>
        else if (this.state.nbQuestionReussit === 6)
            question = <Q7 setQuestionS={this.setQuestionSuccess}/>
        else if (this.state.nbQuestionReussit === 7)
            question = "Bravo tu as terminé le questionnaire avec succès !!!"

        return (
            <div>
                {question}
            </div>
        );
    }
}

export default Questionnaire;