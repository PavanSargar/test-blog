import { Link } from "gatsby";
import React, { useState } from "react";

import { Card, Row, Col, Dropdown } from "react-bootstrap";
import {
  FaEllipsisV,
  FaEye,
  FaRegCommentAlt,
  FaRegHeart,
  FaHeart,
  FaShare
} from "react-icons/fa";

import * as styles from "../styles/postscard.module.css";

const PostsCard = ({ author, date, thumbnail, title, link }) => {
  const [liked, setLiked] = useState(false);
  return (
    <Card className={`${styles.card} mt-5 bg-dark text-white`}>
      <Card.Img
        src={thumbnail}
        alt={title}
      />
      <Card.ImgOverlay>
        <Row>
          <Col>
            <Card.Text>
              {author} <br /> {date}
            </Card.Text>
          </Col>
          <Col className="d-flex flex-row-reverse">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-button-drop-start">
                <span>
                  <FaEllipsisV size={14} />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <span>
                   Share <FaShare className="mb-1" />
                  </span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <div>
          <Link to={`/blog/${link}`}>
          <Card.Title className={`${styles.title}`}>
            <h2>{title}</h2>
          </Card.Title>
          </Link>
          <hr className={`${styles.line} mb-4`} />
          <Row>
            <Col>
              <span className={styles["view-icon"]}>
                <FaEye /> 7
              </span>
              <span data-button-type="comment" className="ps-3">
                <FaRegCommentAlt /> 0
              </span>
            </Col>
            <Col className="d-flex flex-row-reverse">
              <span>
                {liked ? (
                  <FaHeart color="#e84a43" onClick={() => setLiked(false)} />
                ) : (
                  <FaRegHeart onClick={() => setLiked(true)} color="e84a43" />
                )}
              </span>
            </Col>
          </Row>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default PostsCard;
