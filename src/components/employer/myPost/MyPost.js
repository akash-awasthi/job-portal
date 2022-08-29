import React from 'react'
import {useData} from '../../../contexts/DataContext';
import {useAuth} from '../../../contexts/AuthContext';
import {Card, Button, Row, Col, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './MyPost.css'
function JobPostedByMe() {
   const {jobs}=useData();
   const {deleteJob}=useData();
   const {currentUser}=useAuth();
   const navigate=useNavigate();
   const myjobs=jobs.filter((job)=>{
    console.log(job.Posted_By,"and",currentUser.email);
    return job.Posted_by===currentUser.email;
   })
   console.log(myjobs);
  return (
    <div>
      <br />
       <div className = 'user_profile_apply'>
                <div className='page_user_title'>
                    <h2>My Post</h2>
                    
                </div><br />
        {
            myjobs.map((myjob)=>{
                return(
                  <>
                  <Container>
           <div className="jobs">
             <div className="job_company_title">
               <Row>
                 <Col>
                 </Col>
                 <Col sm={8} className="jobs_col">
                 <h6>{myjob.title}</h6>
                                 <h5>Company: {myjob.company}</h5>
                                 <p>CTC: {myjob.Salary}</p>
                                 <p>Eligibility: {myjob.Eligibility}</p>
                                 <p>Posted By: {myjob.Posted_by}</p>
                                 {/* <p>Location: {myjob.location}</p> */}
                                 <p></p>
                 </Col>
                 <Col>
                     <Button  className = "btnView" variant='secondary'style={{marginRight:"5px"}} onClick={()=>{
                        navigate(`/JobPostedByMe/${myjob.id}`);
                      }}>View</Button>
                      <br></br>
                      <Button className='btnView' variant='danger' onClick={() => {
                                    deleteJob(myjob.id)
                                }}>Delete</Button>
                     </Col>
                 <Col>
                   <br></br>
                 </Col>
               </Row>
             </div>
             <hr></hr>
             <p><strong>Requirement: </strong>{myjob.job_description}</p>
             
           </div>

         </Container>
                  </>
                )
            })
        }
    </div>
    </div>
  )
}

export default JobPostedByMe