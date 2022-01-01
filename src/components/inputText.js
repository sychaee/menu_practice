import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function inputText() {
    return (
        <div className="inputText">
            <InputGroup>
              <InputGroup.Text>With textarea</InputGroup.Text>
              <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
        </div>
    );
};

export default inputText;