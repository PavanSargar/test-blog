import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Row, Col, Dropdown, Container, Image } from "react-bootstrap";
import {
  FaEllipsisV,
  FaEye,
  FaRegCommentAlt,
  FaRegHeart,
  FaHeart,
  FaShare,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaLink,
} from "react-icons/fa";
// import Layout from "../components/Layout";
// import PostsCard from "../components/PostsCard";
import Comments from "../components/Comments";
import * as styles from "../styles/post.module.css";

const Post = ({ data }) => {
  const [liked, setLiked] = useState(false);
  const { html, id } = data.markdownRemark;
  const { author, date, quote, thumbnail, title, path } =
    data.markdownRemark.frontmatter;

  let imgLink =
    "https://images-wixmp-7ef3383b5fd80a9f5a5cc686.wixmp.com/ad6ef8f3-8d9b-4e14-9fcd-1f41e7f8e8b6/1566359040035-Brisingr%20Razor.png/v1/fill/w_320,h_320/file.jpg";

  return (
    <Container className={styles["blog-layout"]}>
      <Col className="d-flex flex-row mt-5">
        <Link to="/">All Posts</Link>
      </Col>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="" />
      </Helmet>
      <Container className={styles.container}>
        <Row className={`${styles["post-description"]} mb-4`}>
          <Col sm={8} className="d-flex flex-row ">
            <div className={styles["profile-link"]}>
              <Image width={30} src={imgLink} roundedCircle />
              <span className="text-muted">{author}</span>
            </div>
            <div className="mx-2">|</div>
            <div className={styles["date-time"]}>
              <span className="text-muted">{date}</span>
              <span className="text-muted"> | 2 min read</span>
            </div>
          </Col>
          <Col className={`d-flex flex-row-reverse`}>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-button-drop-start">
                <span>
                  <FaEllipsisV color="#000" size={14} />
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
        <div className={`${styles.title} mb-5`}>
          <h1>{title}</h1>
        </div>
        <div
          className={`${styles.quote} d-flex flex-row justify-content-center mb-5`}
        >
          <q>{quote}</q>
        </div>
        <div
          className={`${styles["featured-img"]} d-flex flex-row justify-content-center mb-5`}
        >
          <Image width={350} src={`${thumbnail}`} thumbnail alt={title} />
        </div>
        <article dangerouslySetInnerHTML={{ __html: html }} />
        <hr />
        <div className={styles.social}>
          <span>
            <FaFacebookF size={18} />
          </span>
          <span>
            <FaTwitter size={18} />
          </span>
          <span>
            <FaLinkedinIn size={18} />
          </span>
          <span>
            <FaLink size={18} />
          </span>
        </div>
        <hr />

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
      </Container>
      <div>
        {/* <Row className={`${styles["recent-posts"]} mt-5`}>
          <Col>
            <span className="text-muted">Recent Posts</span>
          </Col>
          <Col className="d-flex flex-row-reverse">
            <Link to="/">
            <span className="text-muted">See all</span>
            </Link>
          </Col>
        </Row> */}
        {/* <Row>
          <Col className="d-flex flex-row align-items-center justify-content-between">
            <PostsCard />
            <PostsCard />
            <PostsCard />
          </Col>
        </Row> */}
      </div>
      <Comments />
    </Container>
  );
};

export default Post;

export const query = graphql`
  query BlogDetails($slug: String) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        author
        date(fromNow: false)
        quote
        thumbnail
        title
        path
      }
      id
    }
  }
`;
