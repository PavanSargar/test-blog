import React from "react";
import { Link } from "gatsby";

import { Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <Row className="blog-navigation">
      <Col className="d-flex flex-row">
        <Link to="/">All Posts</Link>
      </Col>
      <Col className="d-flex flex-row-reverse">
        <span>
          <FaSearch />
        </span>
      </Col>
    </Row>
  );
};

export default Navbar;
