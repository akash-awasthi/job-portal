import React from 'react'
import { useData } from '../../../contexts/DataContext';
import { useAuth } from '../../../contexts/AuthContext';
import { Card, Button, Row, Container, Col } from 'react-bootstrap'
import './ViewJobs.css'

function JobSeekerViewJobs() {
    const { jobs,updateApplication} = useData();
    const { currentUser } = useAuth();
    console.log(jobs);
    return (
      <>
      <Container>
        <br />
        
      <div className='page_user_title'>
                    <h2>Jobs</h2>
                    
                </div>
                <br />
      <Row xs = {1} md = {2}>
         
            {
                jobs.map((job) => {
                    return (
            <Container>
             
                <Col>
              <div className="jobs">
                <div className="job_company_title">
                  <Row>
                    <Col sm={8} className="jobs_col">
                    <h6>{job.job_title}</h6>
                                    <p>Company: {job.company}</p>
                                    <p>CTC: {job.Salary}</p>
                                    <p>Eligibility: {job.Eligibility}</p>
                                    <p>Posted By: {job.Posted_by}</p>
                                    <p>Location: {job.location}</p>
                                    <p></p>
                    </Col>
                    <Col>
                    <button className = "btn btn-success" onClick={() => {
                                    updateApplication(job.id);alert("Applied Successfully")
                                }}>Apply</button>
                      <br></br>
                    </Col>
                  </Row>
                </div>
                <hr></hr>
                <p><strong>Requirement: </strong>{job.job_description}</p>
                
              </div>
              </Col>

            </Container>

                    )
                })
            }
         
        </Row>
        </Container>
        </>
    )
}

export default JobSeekerViewJobs