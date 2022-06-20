import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { applicantBriefInfo } from "../App";
import colours from "../data/index";

const Header = (props) => {
  console.log(colours[0].background[0]);
  return (
    <div
      className="header-container"
      style={{ background: colours[0].background[0].color }}
    >
      <Container>
        <h1 className="custom-fw-bold">{props.title}</h1>
        <p>{props.description}</p>

        <div className="taker-container">
          <h5 className="custom-fw-bold">{applicantBriefInfo.name}</h5>
          <p>{applicantBriefInfo.dateTaken}</p>
        </div>
      </Container>
    </div>
  );
};

Header.defaultProps = {
  title: "React Theme Library",
  description: "Create a reusable library.",
};

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Header;
