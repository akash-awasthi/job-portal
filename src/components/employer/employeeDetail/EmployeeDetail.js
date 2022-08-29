import React, { useState } from "react";
import { useData } from "../../../contexts/DataContext";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button, ListGroup, Container, Row, Col, Modal } from "react-bootstrap";
import "./EmployeeDetail.css";
function JobDetailsEmployee() {
  const { jobs } = useData();
  const { id } = useParams();
  const { deleteJob } = useData();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [applicantViewStatus, setApplicantViewStatus] = useState(false);
  const job = jobs.filter((sjob) => {
    return sjob.id == id;
  });
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div>
      <br />
       <div className = 'user_profile_apply'>
                <div className='page_user_title'>
                    <h2>Candidate Applied</h2>
                    
                </div><br />
      <Container>
        <div className="jobpostedbyme_div">
         <Row>
         <Col>
            <div className="jobpostedbyme_details">
            <h4>Title: {job[0].job_title}</h4>
          <p>Company: {job[0].company}</p>
          <p>Salary {job[0].Salary}</p>
          <p>Requirement: {job[0].Eligibility}</p>
            </div>
          </Col>
         <Col className="jobpostedbyme_col">
         <Button className="btn modal-button" onClick={handleShow}>
            View Applicants
          </Button>
         </Col>
         </Row>
        </div>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Applicant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          {job[0].Applications.map((applicant) => {
            return (
              <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item>
                  <p>{applicant}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      navigate(`/ApplicantProfile/${applicant}`);
                    }}
                  >
                    View
                  </button>
                  {/* <button className="btn btn-danger">Delete</button> */}
                </ListGroup.Item>
              </ListGroup>
            );
          })}
          {applicantViewStatus && job[0].Applications.length == 0 && (
            <div style={{ color: "Red" }}>No Applicant!</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
}

export default JobDetailsEmployee;