
// import React from 'react'
// import './Footer.css'

// export default function Footer() {
//     return (
//         <div className="bg-dark text-light">
//             <div className="row text-center text-xs-center">
//                 <div className="col-xs-12 col-sm-4 col-md-4 my-3">
//                     <h5 className="margin-form">Home</h5>
//                     <ul className="list-unstyled quick-links">
//                         <li><i className=""></i>Home</li>
//                         <li><i className=""></i>About</li>
//                         <li><i className=""></i>FAQ</li>
//                         <li><i className=""></i>Get Started</li>
//                         <li><i className=""></i>Videos</li>
//                     </ul>
//                 </div>
//                 <div className="col-xs-12 col-sm-4 col-md-4 my-3">
//                     <h5 className="margin-form">Company</h5>
//                     <ul className="list-unstyled quick-links">
//                         <li><i className=""></i>Home</li>
//                         <li><i className=""></i>About</li>
//                         <li><i className=""></i>FAQ</li>
//                         <li><i className=""></i>Get Started</li>
//                         <li><i className=""></i>Videos</li>
//                     </ul>
//                 </div>
//                 <div className="col-xs-12 col-sm-4 col-md-4 my-3">
//                     <h5 className="margin-form">Jobs</h5>
//                     <ul className="list-unstyled quick-links">
//                         <li><i className=""></i>Home</li>
//                         <li><i className=""></i>About</li>
//                         <li><i className=""></i>FAQ</li>
//                         <li><i className=""></i>Get Started</li>
//                         <li><i className=""></i>Imprint</li>
//                     </ul>
//                 </div>
//             </div>
            
//             <div className="row">
//                 <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
//                     <ul className="list-unstyled list-inline social text-center">
//                         <li className="list-inline-item"><i className="fa fa-facebook"></i></li>
//                         <li className="list-inline-item"><i className="fa fa-twitter"></i></li>
//                         <li className="list-inline-item"><i className="fa fa-instagram"></i></li>
//                         <li className="list-inline-item"><i className="fa fa-google-plus"></i></li>
//                         <li className="list-inline-item"><i className="fa fa-envelope"></i></li>
//                     </ul>
//                 </div>
//                 <hr></hr>
//             </div>  
//             <div className="row">
//                 <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
//                     <p className="h6">All right Reversed By <strong>IA WORKS</strong></p>
//                 </div>
//                 <hr></hr>
//             </div>  
//         </div> 
        
//     )
// }

import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <div className="bg-dark text-light">
            <div className="row text-center text-xs-center">
                <div className="col-xs-12 col-sm-4 col-md-4 my-3">
                    <Link to='/' style={{textDecoration:"none" , color:"white"}}><h5 className="margin-form">Home</h5></Link>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 my-3">
                    <Link to='/about' style={{textDecoration:"none" , color:"white"}}> <h5 className="margin-form">About</h5></Link>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 my-3">
                   <Link to='/contact' style={{textDecoration:"none" , color:"white"}}><h5 className="margin-form">Contact Us</h5></Link>
                </div>
            </div>
            
            <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                    <ul className="list-unstyled list-inline social text-center">
                        <li className="list-inline-item"><i className="fa fa-facebook"></i></li>
                        <li className="list-inline-item"><i className="fa fa-twitter"></i></li>
                        <li className="list-inline-item"><i className="fa fa-instagram"></i></li>
                        <li className="list-inline-item"><i className="fa fa-google-plus"></i></li>
                        <li className="list-inline-item"><i className="fa fa-envelope"></i></li>
                    </ul>
                </div>
                {/* <hr></hr> */}
            </div>  
            <hr></hr>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                    <p className="h6">All right Reversed By <strong>IA WORKS</strong></p>
                </div>
                <hr></hr>
            </div>  
        </div>
    )
}