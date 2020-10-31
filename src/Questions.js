import React, { Component, useState, useRef } from "react";
import { Col, Container, Nav, Navbar, Row, Button, Form, FormLabel, Radio } from 'react-bootstrap';
import triviaQuestions from "./Data.json";
import './App.css';
// store the incorrect and correct answers together in an array
for (const item of triviaQuestions) {
    const options = item.incorrect;
    options.push(item.correct);
    item.allOptions = options;
}
// shuffle it
shuffleArray(triviaQuestions);
console.log(triviaQuestions);


// function to shuffle items
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function Questions() {
    const [questionIdx, setQuestionIdx] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [questionsLeft, setQuestionsLeft] = useState(true);
    const [showNextBut, setShowNextBut] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [selection, setSelection] = useState();
    // shuffles the questions
    
    // handle answered question
    let showCorrect = null;
    const choices = []

    const handleChoice = (response) => {
        // check if it is correct
        setDisabled(true);
        setShowNextBut(true);
        setSelection(response);
        const correctAns = triviaQuestions[questionIdx].correct;
        if (response === correctAns) {
            setCorrectCount(correctCount + 1)
        }
    }
    const changeColor = (option) => {
        if (option === triviaQuestions[questionIdx].correct) {
            return ('green')
        }
        else if(option === selection) {
            return('red')
        }
        else {
            return('grey')
        }
    }
        const getNextQ = (evt) => {
        shuffleArray(triviaQuestions[questionIdx].allOptions);
        // shows the next question (up to Q10)
        evt.preventDefault();
        setDisabled(false);
        const nextIdx = questionIdx + 1
        if (nextIdx < 10) {
            setQuestionIdx(questionIdx + 1);
            setShowNextBut(false);
        }
        else {
            setQuestionsLeft(false);
        }
    }
    const playAgain = (response) => {
        setCorrectCount(0);
        setQuestionIdx(0);
        setQuestionsLeft(true);
        shuffleArray(triviaQuestions[questionIdx].allOptions);
    }
    for (const choice of triviaQuestions[questionIdx].allOptions.values()) {
        choices.push(
            <div>
                <Button 
                className="option-but" 
                value={choice}
                style={disabled ? {backgroundColor: changeColor(choice)} : null  }
                disabled={disabled}
                id={choice} onClick={() => handleChoice(choice)}>{choice}
                </Button>                
            </div>
        )
    }
    return(
        <React.Fragment>
            <div className="title container-fluid"><h3>Trivia Training 💪</h3></div>
            {questionsLeft? (
                <Form id='question-form'>
                    <FormLabel> Question {questionIdx + 1}: {triviaQuestions[questionIdx].question} </FormLabel>
                    <div>{choices}</div>
                    <div>{correctCount} correct so far</div>
                    {showNextBut? (
                        <div><button id="next-but" onClick={getNextQ}>Next >> </button></div>) : (
                        <div></div> )
                    }
                </Form>
            ) : (
                <React.Fragment>
                    <div id="final-box">
                        <div >
                            <div id="final-box-text">Final Score: {correctCount} / {questionIdx+ 1}</div>
                            <button id="play" onClick={playAgain}>Play Again?</button>
                        </div>
                    </div>
                    
                </React.Fragment>
            )}
            <div className="footer container-fluid">
                <p className="center">💡 | 
                <i className="fas fa-envelope-square padding"></i> Stephanie Resis | 
                <a href="https://www.linkedin.com/in/stephanie-resis/"><i className="fab fa-linkedin padding"></i> LinkedIn </a>
                </p>
            </div>
        </React.Fragment>     
    )
}

export default Questions;