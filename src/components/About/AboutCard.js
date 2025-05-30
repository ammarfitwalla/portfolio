import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ammar Fitwalla </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently employed as a software developer at TCS.
            <br />
            I have completed Master of Engineering (M.E) in Information Technology from the University of Mumbai.
            <br />
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Enhancing Human Lives through AI!"{" "}
          </p>
          <footer className="blockquote-footer">Ammar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
