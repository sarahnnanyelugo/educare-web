import React, { useState } from "react";
import "./compare-features.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

export const CompareFeatures = () => {
  return (
    <div className="compare-features-container">
      {" "}
      <Accordion defaultActiveKey="">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <p>Compare all features</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              The Wellspring College was founded in ------. Starting with grades
              K-6, the school added a grade level each year until our first
              senior class graduated in 1994. In each of the classes graduating
              since that time, every graduating senior has been accepted to
              college.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
