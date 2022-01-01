import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, InputGroup, FormControl, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Input() {
    const [inputType, setInputType] = useState(true);
    function textInput() {
        setInputType(true);
    }
    function imageInput() {
        setInputType(false);
    }
    return (
        <div className="d-grid gap-2">
            <Button variant="primary" size="lg" onClick={textInput}>
              텍스트 직접 입력
            </Button>
            <Button variant="secondary" size="lg" onClick={imageInput}>
              이미지 업로드
            </Button>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">제목</InputGroup.Text>
              <FormControl
                placeholder="제목을 입력해주세요."
                aria-label="title"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            {inputType ? (
            <InputGroup>
            <InputGroup.Text>요약할 텍스트 입력</InputGroup.Text>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>) : (
              <h1>이미지 업로드</h1>
          )}
          <Button as="input" type="submit" value="Submit" />{' '}
          <Card border="dark" style={{ width: '18rem' }}>
            <Card.Header>요약 결과</Card.Header>
            <Card.Body>
              <Card.Title>제목</Card.Title>
              <Card.Text>
                요약문 내용
                Sunt eu amet sunt non veniam. Nostrud reprehenderit sit nisi dolor minim ut dolor aliquip exercitation dolor sint. Ullamco mollit deserunt eiusmod non incididunt eu Lorem laborum minim pariatur in. Velit excepteur nostrud enim sit adipisicing id ea. Anim laborum irure nostrud excepteur sit pariatur fugiat eiusmod elit.
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="mb-2">
              <Link to="/quiz">
                <Button variant="primary" size="lg">
                  QUIZ
                </Button>
              </Link>
              <Link to="/mindmap">
                <Button variant="secondary" size="lg">
                  마인드맵
                </Button>
              </Link>
    
  </div>
        </div>
    );
}

export default Input;