import React from "react"
import Typed from "react-typed";

const About = () => {
    
  return (
<>
   
    <div className="p-5 mb-5 bg-light text-dark">
      <div className="container">
        <div className='row'>
          <div className='col-sm-6' style={{ marginTop: 97 }}>
            
            <p className='big-text'>About us</p>
            <p>IA labs works closely to bridge the gap between talent and opportunities and offers end-to-end recruitment solutions.
               IA labs Job Fair brings candidates and top employers under one roof. While  HR Conclave brings top HR leaders to share insights on latest trends, innovations and best practices in the HR industry. 
              IA labs also has a large reach through its print product, Shine Jobs – the Tuesday Job supplement of Hindustan Times– making it the only job portal with an integrated print and online offering</p>
            

          </div>
          <div className='col-sm-6'>
            <div style={{ marginTop: 97 }}>

              <img src={process.env.PUBLIC_URL + "image2.png"} alt="mypic" />
            </div>

          </div>

        </div>
      </div>
      </div>
    
      
    </>

    
  )
}

export default About