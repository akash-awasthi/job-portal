import React from 'react'
import {useParams} from 'react-router-dom'
import {useData} from '../../../contexts/DataContext'
import {Container,Col,Row} from 'react-bootstrap'
import './Profile.css'
function ApplicantProfile() {
    const {applicant}=useParams();
    const {jobSeekers}=useData();
    const person=jobSeekers.filter((jobSeeker)=>{
        return jobSeeker.email==applicant
    })
    console.log(person[0]);
  return (
    <div>
      <br />
       <Container>
      <div className='page_user_title'>
                    <h2>About the Applicant</h2>
                   
                </div>
                <br />
            <Row>
            <Col>
             <div className='title_applicant'>
                        <h4>Personal</h4>
                    </div>
                    <hr></hr>
                 <div className='applicant_details'>
                 <h5>Name: {person[0].name}</h5>
                                 <p>About: {person[0].about}</p>
                                 <p>Age {person[0].age}</p>
                                 <p>Contact: {person[0].contact}</p>
                                 <p>Address: {person[0].address}</p>
                  </div>
                  </Col>
                  <Col>
                  <div className='title_applicant'>
                        <h4>Professional</h4>
                    </div>
                    <hr></hr>
                 <div className='applicant_details'>

                                 <p>Email: {person[0].email}</p>
                                 <p>Education: {person[0].Education}</p>
                                 <p>Skills: {person[0].Skills}</p>
                                 <p>Experience: {person[0].Experience}</p>
                                 <p><a href = {person[0].image} target="_blank">Open Resume</a></p>
                 </div>
           </Col>
            </Row>
            
         </Container>
    </div>
  )
}

export default ApplicantProfile
