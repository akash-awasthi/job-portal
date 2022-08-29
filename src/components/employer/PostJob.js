import React, { useRef } from 'react'
import {  Container, Row, Col } from 'react-bootstrap'
import { useData } from '../../contexts/DataContext'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
function PostJob() {
    const companyRef = useRef();
    const imageRef = useRef();
    const jobTitleRef = useRef();
    const jobDescriptionRef = useRef();
    const salaryRef = useRef();
    const elegibilityRef = useRef();
    const { createJob } = useData();
    const navigate = useNavigate()
    const { currentUser } = useAuth()
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            console.log(typeof (elegibilityRef.current.value));
            let obj = {
                Applications: [],
                Eligibility: elegibilityRef.current.value,
                Image: '',
                job_description: jobDescriptionRef.current.value,
                Posted_by: currentUser.email,
                Salary: salaryRef.current.value,
                company: companyRef.current.value,
                job_title: jobTitleRef.current.value,
            }
            console.log(obj)
            await createJob(obj);
            alert("Job Post Successfull")
            navigate('/')
        }
        catch (err) {
            console.log(err);
        }

    }
    return (
        <div>
            <br />
            <div className = 'user_profile_apply'>
                <div className='page_user_title'>
                    <h2>Post a Job</h2>
                   
                </div>
                <Container>
                    <div className='title'>
                        <h5>Company</h5>
                    </div>
                    <hr></hr>
                    <Row className='user_profile_row'>
                        <Col sm = {4} className='label_user_profile'>
                        <label>Name</label>
                        </Col>
                        <Col sm = {8}>
                    <input type='text' placeholder = "Enter the Company Name" className='input_user_profile' ref={companyRef} required/>
                        </Col>
                    </Row>
                    {/* <Row className='user_profile_row'>
                        <Col sm = {4} className='label_user_profile'>
                        <label>Image</label>
                        </Col>
                        <Col sm = {8}>
                    <input type='file' placeholder = "Enter you Name" className='input_user_profile' ref={imageRef} required />
                        </Col>
                    </Row> */}
<Row className='user_profile_row'>
                        <Col sm = {4} className='label_user_profile'>
                        <label>Job Title</label>
                        </Col>
                        <Col sm = {8}>
                    <input type='text' placeholder = "Enter you Job Title" className='input_user_profile' ref={jobTitleRef} required/>
                        </Col>
                    </Row>
                    <Row className='user_profile_row'>
                        <Col sm = {4} className='label_user_profile'>
                        <label>Job Description</label>
                        </Col>
                        <Col sm = {8}>
                    <input type='text' placeholder = "Enter the Job Description" className='input_user_profile' ref={jobDescriptionRef} required/>
                        </Col>
                    </Row>
                    <Row className='user_profile_row'>
                        <Col sm = {4} className='label_user_profile'>
                        <label>Salary</label>
                        </Col>
                        <Col sm = {8}>
                    <input type='text' placeholder = "Enter the Salary Offered" className='input_user_profile' ref={salaryRef} required/>
                        </Col>
                    </Row>
                    <Row className='user_profile_row'>
                        <Col sm = {4} className='label_user_profile'>
                        <label>Skills Required</label>
                        </Col>
                        <Col sm = {8}>
                    <input type='text' placeholder = "Enter the Skills Required" className='input_user_profile' ref={elegibilityRef} required/>
                        </Col>
                    </Row>
                    </Container>
                    <button className='btn btn-success user_profile_btn'  onClick = {handleSubmit} >Submit</button>
                    </div>
        </div>

    )
}

export default PostJob

