import React from 'react'

import About from '../about/About';
import { Link} from "react-router-dom";
import JobSeekerViewJobs from '../jobSeeker/viewJobs/ViewJobs';

import JobPostedByMe from '../employer/myPost/MyPost';
import {useAuth} from '../../contexts/AuthContext'


export default function Home() {

  const {currentUser , logout} = useAuth();
  const {type}=useAuth();

  const myStyle={
    marginTop:'190px',
    fontSize: '50px',
    color:'dodgerblue'
  }
  return (
    <>
    <div class="bg-light text-white">
       <div className="container ">
      <div className='row'>

        <div className='col-6'>
        <h1 className="font-size-11" style={{marginTop:200}}>Get hired by the
                  popular teams.</h1>
          
         
          
          

        </div>
        <div className='col-6'>
          <div style={{marginTop:55}}>
         

        <img src={process.env.PUBLIC_URL+"hero-image-1.png"} alt="mypic"  />

        </div>

        </div>
{/* 
        <div className='col-1'>
        {/* < style={{marginTop:55}}>
        {/* <div style={{marginLeft:30}}> */}
      
        {/* </div> */}
        
        

       

      </div>
    </div>
       </div>
       {currentUser && <>
       {type ==='0' ?
        <JobSeekerViewJobs/> : <JobPostedByMe/>}
        </>
      }

      {!currentUser && <>
      <br />
      <br />
      <div className="text-center mb-8 mb-lg-18 px-xl-9 px-xxl-7 ">
              <h2 className="font-size-9 mb-6">Easy steps to<br class="d-none d-sm-block"/> land your next job</h2><br />
              <p className="font-size-4 text-default-color px-xs-9 px-md-0 text-color">Finding right job and right candidate is not easy. To make your life easier, we are <br/>bringing both companies and candidate at same place.</p>
            </div>
            <div class="row justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
         
          <div class="col-12 col-lg-4 col-md-6 col-sm-8 col-xs-8">
            <div class="px-xl-7 px-xxl-12 pt-5 pb-3 pb-lg-9 text-center">
              <div class="square-92 rounded-4 bg-dodger text-white font-size-8 mx-auto shadow-dodger mb-11">
                <img src={process.env.PUBLIC_URL+"icon1.png"} alt=""/>
              </div>
              <div class="services-content">
                <h3 class="font-size-6 mb-7">Register Your Account</h3>
                
              </div>
            </div>
          </div>
         
          <div class="col-12 col-lg-4 col-md-6 col-sm-8 col-xs-8">
            <div class="px-xl-7 px-xxl-12 pt-5 pb-3 pb-lg-9 text-center">
              <div class="square-92 rounded-4 bg-green text-white font-size-8 mx-auto shadow-green mb-11">
                <img src={process.env.PUBLIC_URL+"icon4.png"} alt="" />
              </div>
              <div class="services-content">
                <h3 class="font-size-6 mb-7">Apply for New Jobs</h3>
               
              </div>
            </div>
          </div>
          
          <div class="col-12 col-lg-4 col-md-6 col-sm-8 col-xs-8">
            <div class="px-xl-7 px-xxl-12 pt-5 pb-3 pb-lg-9 text-center">
              <div class="square-92 rounded-4 bg-casablanca text-white font-size-8 mx-auto shadow-casablanca mb-11">
                <img src={process.env.PUBLIC_URL+"icon3.webp"} alt=""/>
              </div>
              <div class="services-content">
                <h3 class="font-size-6 mb-7">Get Hired Immediately</h3>
                
              </div>
            </div>
          </div>
         
        </div>
      <About/>
      </>}

       
      
    
      
       
    </>

  )
}