import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiHtml5,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
} from "react-icons/di";
import { FaCamera } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BiBarChartAlt2 } from "react-icons/bi";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiAmazonaws,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGerrit,
  SiPostman,

} from "react-icons/si";
import { TbBrandGolang, TbSql } from "react-icons/tb";

function Techstack() {
  return (
    <>
      {/* Programming Languages */}
      <h3 className="text-center my-4">Programming Languages</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons"><DiPython /><h5>Python</h5></Col>
        {/* <Col xs={4} md={2} className="tech-icons"><DiJava /><h5>Java</h5></Col> */}
        {/* <Col xs={4} md={2} className="tech-icons"><TbBrandGolang /><h5>Go</h5></Col> */}
        <Col xs={4} md={2} className="tech-icons"><CgCPlusPlus /><h5>C++</h5></Col>
        <Col xs={4} md={2} className="tech-icons"><TbSql /><h5>SQL</h5></Col>
        {/* <Col xs={4} md={2} className="tech-icons"><SiSolidity /><h5>Solidity</h5></Col> */}
      </Row>

      {/* Machine Learning & Computer Vision */}
      <h3 className="text-center my-4">Machine Learning & Computer Vision</h3>
      {/* <p className="text-center text-muted">
        LLMs, TensorFlow, PyTorch, Scikit-Learn, EDA, Image Processing, Deep & Graph Neural Networks
      </p> */}
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons"><SiTensorflow /><h5>TensorFlow</h5></Col>
        <Col xs={4} md={2} className="tech-icons"><SiPytorch /><h5>PyTorch</h5></Col>
        <Col xs={4} md={2} className="tech-icons"><SiScikitlearn /><h5>Scikit-Learn</h5></Col>
        <Col xs={4} md={2} className="tech-icons"><FaCamera /><h5>Computer Vision/OpenCV</h5></Col>
        {/* <Col xs={4} md={2} className="tech-icons"><GiArtificialIntelligence /><h5>Deep Learning</h5></Col>
        <Col xs={4} md={2} className="tech-icons"><BiBarChartAlt2 /><h5>Data Science</h5></Col> */}
        {/* <Col xs={4} md={2} className="tech-icons">< /><h5>Deep Learning</h5></Col> */}
      </Row>

      {/* Web Development */}
      <h3 className="text-center my-4">Web Development</h3>
      {/* <p className="text-center text-muted">
        Django, Flask, FastAPI, REST APIs, JavaScript, React, Node.js
      </p> */}
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons"><SiDjango /><h5>Django</h5></Col>
        <Col xs={4} md={2} className="tech-icons"><SiFlask /><h5>Flask</h5></Col>
        <Col xs={4} md={2} className="tech-icons"><SiFastapi /><h5>FastAPI</h5></Col>
        <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /><h5>JavaScript</h5></Col>
        <Col xs={4} md={2} className="tech-icons"><DiReact /><h5>React</h5></Col>
        {/* <Col xs={4} md={2} className="tech-icons"><DiNodejs /><h5>Node.js</h5></Col>
        <Col xs={4} md={2} className="tech-icons"><SiNextdotjs /><h5>Next.js</h5></Col> */}
        {/* <Col xs={4} md={2} className="tech-icons"><SiFirebase /><h5>Firebase</h5></Col> */}
      </Row>

      {/* Databases */}
      <h3 className="text-center my-4">Databases</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons"><DiMongodb /><h5>MongoDB</h5></Col>
        <Col xs={4} md={2} className="tech-icons"><SiPostgresql /><h5>PostgreSQL</h5></Col>
        <Col xs={4} md={2} className="tech-icons"><DiMysql /><h5>MySQL</h5></Col>
        <Col xs={4} md={2} className="tech-icons"><SiFirebase /><h5>Firebase</h5></Col>
        <Col xs={4} md={2} className="tech-icons"><SiRedis /><h5>Redis</h5></Col>
      </Row>

    
      {/* Software Engineering */}
      <h3 className="text-center my-4">Version Control</h3>
      {/* <p className="text-center text-muted">
        SDLC, Git, Gerrit, Agile, CI/CD
      </p> */}
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons"><DiGit /><h5>Git</h5></Col>
        <Col xs={4} md={2} className="tech-icons"><SiJenkins /><h5>Jenkins</h5></Col>
        {/* <Col xs={4} md={2} className="tech-icons"><SiPostman /><h5>Postman</h5></Col> */}
        <Col xs={4} md={2} className="tech-icons"><SiGerrit /><h5>Gerrit</h5></Col>

        {/* Add Gerrit logo manually or use generic gear icon if available */}
      </Row>

      {/* Cloud & DevOps */}
      <h3 className="text-center my-4">Cloud & DevOps</h3>
      {/* <p className="text-center text-muted">
        AWS (S3, SageMaker, EC2), GCP, Docker, Kubernetes
      </p> */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons"><SiAmazonaws /><h5>AWS</h5></Col>
        <Col xs={4} md={2} className="tech-icons"><SiGooglecloud /><h5>GCP</h5></Col>
        <Col xs={4} md={2} className="tech-icons"><SiDocker /><h5>Docker</h5></Col>
        <Col xs={4} md={2} className="tech-icons"><SiKubernetes /><h5>Kubernetes</h5></Col>
      </Row>
    </>
  );
}

export default Techstack;
