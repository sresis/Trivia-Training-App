import React, { Component, useState } from "react";
import { Col, Container, Nav, Navbar, Row, Button } from 'react-bootstrap';
import triviaQuestions from "./Data.json";
function Questions() {
    // store the incorrect and correct answers in an array
    for (const item of triviaQuestions) {
        const allOptions = item.incorrect;
        allOptions.push(item.correct);
        console.log(allOptions)

    }

        // show one question
    return(
        <Button>hi</Button>
    )
}

export default Questions;