import React, { Component, useState } from "react";
import { Col, Container, Nav, Navbar, Row, Button, Form, FormLabel, Radio } from 'react-bootstrap';
import triviaQuestions from "./Data.json";

// store the incorrect and correct answers together in an array
for (const item of triviaQuestions) {
    const options = item.incorrect;
    options.push(item.correct);
    item.allOptions = options;
}
const values = Object.values(triviaQuestions)
const randomValue = values[parseInt(Math.random() * values.length)]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function Questions() {
    const [questionIdx, setQuestionIdx] = useState(0);
    console.log(triviaQuestions[1]);
    const x = shuffleArray(triviaQuestions[questionIdx].allOptions);
    console.log(x);
    const choices = []
    for (const choice of triviaQuestions[questionIdx].allOptions.values()) {
        choices.push(
            <div>
                <Button>{choice}</Button>                
            </div>
        )
    }
    return(
        <Form>
            <FormLabel>{triviaQuestions[questionIdx].question} </FormLabel>
            <div>{choices}</div>

        </Form>
    )
}

export default Questions;