import React, { Component, useState } from "react";
import { Col, Container, Nav, Navbar, Row, Button } from 'react-bootstrap';
import triviaQuestions from "./Data.json";
function Questions() {
    // store the incorrect and correct answers together in an array
    for (const item of triviaQuestions) {
        let options = item.incorrect;
        options.push(item.correct);
        item.allOptions = options;
    }
    const values = Object.values(triviaQuestions)
    const randomValue = values[parseInt(Math.random() * values.length)]
    console.log(randomValue)

        // show one question
    return(
        <Button>hi</Button>
    )
}

export default Questions;