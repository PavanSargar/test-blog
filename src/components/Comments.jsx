import React from "react";

import { Container, Row, Col, Button, Form, Image } from "react-bootstrap";
import avatarImg from "../images/avatar-comments.webp";

import * as styles from "../styles/comments.module.css";

const Comments = () => {
  return (
    <div className={`${styles.container} mt-5`}>
      <Row className={styles.comments}>
        <h2>Comments</h2>
        <hr className="mb-5 mt-4" />
        <Col sm={1}>
          <Image src={avatarImg} width={50} thumbnail roundedCircle />
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-row justify-content-end">
          <Button className={styles["cancel-button"]} variant="outline-dark">
            Cancel
          </Button>
          <Button
            className={`${styles["publish-button"]} ms-2`}
            variant="outline-dark"
          >
            Publish
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Comments;
