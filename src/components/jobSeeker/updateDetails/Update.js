import React, { useRef, useState } from 'react';
import { useData } from '../../../contexts/DataContext';
import { useAuth } from '../../../contexts/AuthContext';
import { Form, Button, Card, Alert, Dropdown, Container, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Update.css'
function UpdateJobSeeker() {
    const nameRef = useRef();
    const imageRef = useRef();
    const ageRef = useRef();
    const contactRef = useRef();
    const educationRef = useRef();
    const experienceRef = useRef();
    const skillsRef = useRef();
    const aboutRef = useRef();
    const addressRef = useRef();
    const { jobSeekers, updateJobSeeker,setUpdateUseEffect,updateUseEffect } = useData();
    const { currentUser } = useAuth();
    const navigate = useNavigate()
    async function handleSubmit(e) {
        e.preventDefault();
        setUpdateUseEffect(!updateUseEffect);
        const tempobj = jobSeekers.filter((jobSeeker) => {
            //console.log(jobSeeker.email,"And",currentUser.email)
            return jobSeeker.email === currentUser.email;
        })
        const updateobj = {
            Education: educationRef.current.value,
            Experience: experienceRef.current.value,
            Skills: skillsRef.current.value,
            about: aboutRef.current.value,
            address: addressRef.current.value,
            age: ageRef.current.value,
            contact: contactRef.current.value,
            image: imageRef.current.value,
            name: nameRef.current.value
        }
        console.log(tempobj[0])
        updateJobSeeker(tempobj[0].id, updateobj);
        alert("Updated Successfully")
        navigate('/')
    }
navigate('/JobSeeker')
    
    return (
        <>
        <br />
        <br/>
            <div className = 'user_profile_apply'>
                <div className='page_user_title'>
                    <h2>Update Details</h2>
                    
                </div>
                <Container>
                    <div className='title'>
                        <h5>Profile</h5>
                    </div>
                    <hr></hr>
                    <Row className='user_profile_row'>
                        <Col sm = {4} className='label_user_profile'>
                        <label>Name</label>
                        </Col>
                        <Col sm = {8}>
                    <input type='text' placeholder = "Enter you Name" className='input_user_profile'  ref={nameRef} required/>
                        </Col>
                    </Row>
                    <Row className='user_profile_row'>
                        <Col sm = {4} className='label_user_profile'>
                        <label>Age</label>
                        </Col>
                        <Col sm = {8}>
                    <input type='text' placeholder = "Enter you Age" className='input_user_profile' ref={ageRef} required/>
                        </Col>
                    </Row>
                    <Row className='user_profile_row'>
                        <Col sm = {4} className='label_user_profile'>
                        <label>About</label>
                        </Col>
                        <Col sm = {8}>
                    <input type='text' placeholder = "Enter About You" className='input_user_profile' ref={aboutRef} required/>
                        </Col>
                    </Row>
                    <Row className='user_profile_row'>
                        <Col sm = {4} className='label_user_profile'>
                        <label>Contact</label>
                        </Col>
                        <Col sm = {8}>
                    <input type='text' placeholder = "Enter About Contact Number" className='input_user_profile' ref={contactRef} required/>
                        </Col>
                    </Row>
<Row className='user_profile_row'>
                        <Col sm = {4} className='label_user_profile'>
                        <label >Address</label>
                        </Col>
                        <Col sm = {8}>
                    <input type='text' placeholder = "Enter your Peromanent Address" className='input_user_profile' ref={addressRef} required/>
                        </Col>
                    </Row>
                    <div className='title'>
                        <h5>Professional</h5>
                    </div>
                    <hr></hr>
                    <Row className='user_profile_row'>
                        <Col sm = {4} className='label_user_profile'>
                        <label>Education</label>
                        </Col>
                        <Col sm = {8}>
                    <input type='text' placeholder = "Enter your Education" className='input_user_profile' ref={educationRef} required/>
                        </Col>
                    </Row>
                    <Row className='user_profile_row'>
                        <Col sm = {4} className='label_user_profile'>
                        <label>Skills</label>
                        </Col>
                        <Col sm = {8}>
                    <input type='text' placeholder = "Upload your Skills" className='input_user_profile' ref={skillsRef} required/>
                        </Col>
                    </Row>
                    <Row className='user_profile_row'>
                        <Col sm = {4} className='label_user_profile'>
                        <label>Experience</label>
                        </Col>
                        <Col sm = {8}>
                    <input type='text' placeholder = "Enter your Experience" className='input_user_profile' ref={experienceRef} required/>
                        </Col>
                    </Row>
                    <Row className='user_profile_row'>
                        <Col sm = {4} className='label_user_profile'>
                        <label>Resume</label>
                        </Col>
                        <Col sm = {8}>
                    <input type='text' placeholder = "Upload your Resume link" className='input_user_profile' ref={imageRef} required/>
                        </Col>
                    </Row>
                    <button className='user_profile_btn btn btn-success '  type='submit' onClick={handleSubmit}>Submit</button>
                </Container>
            </div>
            </>
       
    )
}

export default UpdateJobSeeker