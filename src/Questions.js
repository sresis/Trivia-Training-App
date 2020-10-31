import React, { Component, useState } from "react";
import { Col, Container, Nav, Navbar, Row, Button, Form, FormLabel, Radio } from 'react-bootstrap';
import triviaQuestions from "./Data.json";

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
    // shuffles the questions
    shuffleArray(triviaQuestions[questionIdx].allOptions);
    const choices = []

    const handleChoice = (response) => {
        // check if it is correct
        const correctAns = triviaQuestions[questionIdx].correct;
        if (response === correctAns) {
            alert('bingo bango');
            setCorrectCount(correctCount + 1);
        }
        else {
            alert('wrong');
        }
        const nextIdx = questionIdx + 1
        if (nextIdx < 10) {
            setQuestionIdx(questionIdx + 1);
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
                <Button onClick={() => handleChoice(choice)}>{choice}</Button>                
            </div>
        )
    }
    return(
        <React.Fragment>
            {questionsLeft? (
                <Form>
                    <FormLabel> Question {questionIdx + 1}: {triviaQuestions[questionIdx].question} </FormLabel>
                    <div>{choices}</div>
                    <div>{correctCount} / {questionIdx} correct so far</div>
                </Form>
                
            ) : (
                <React.Fragment>
                    <div>Final Score: {correctCount} / {questionIdx+ 1}</div>
                    <Button value="play" onClick={playAgain}>Play Again?</Button>
                </React.Fragment>
            )}
            

        </React.Fragment>
        
    )
}

export default Questions;