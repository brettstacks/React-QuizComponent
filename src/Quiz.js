import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd.js';

let quizData = require('./quiz_data.json');

class Quiz extends Component{

    constructor(props){
        super(props);
        this.state = {quiz_position: 1};
    }

    render(){
        const isQuizEnd = (this.state.quiz_position - 1 == quizData.quiz_questions.length) ? true : false;
        console.log("quiz pos: " + this.state.quiz_position);
        console.log("quiz length: " + quizData.quiz_questions.length);
        let quizQuestion;
        if(isQuizEnd){
            quizQuestion = <QuizEnd/>
        }else{
            quizQuestion = <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}/>
        }
        return (
            <div>
                {quizQuestion}
            </div>
        );
    }
}

export default Quiz;