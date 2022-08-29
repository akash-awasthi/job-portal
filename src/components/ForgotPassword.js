import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert , Container} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link} from 'react-router-dom'
function Login() {
    const emailRef=useRef();
    const { resetPassword }=useAuth();
    const [error,setError]=useState("");
    const [message,setMessage]=useState();
    const [loading,setLoading]=useState(false);

    async function handleSubmit(e)
    {
        e.preventDefault();
        try{
            setMessage("");
            setError("");
            setLoading(true);
            await resetPassword(emailRef.current.value); 
            setMessage("Check your inbox for Further Instructions.");
        }
        catch{
            setError('Failed To Reset Password');
        }
        setLoading(false);
    }
  return (
    <>
     <div className='bg-image loginbackground'>
      <div>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "90vh" }}
        >
         <div className="w-100 shadow p-3 mb-5 bg-light rounded border border-primary" style={{ maxWidth: "400px" }}>
    
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Forgot Password</h2>
                {message && <Alert variant="success">{message}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                   <Form.Group id="email">
                        <Form.Label>
                            Email
                        </Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100 mt-3"  type="submit">
                        Reset Password
                    </Button>
                </Form>
                <div className="w-100 text-center mt-3"><Link to="/login">Login</Link></div>
                <div className="w-100 text-center mt-2" >Need An Account? <Link to="/signup">SignUp</Link></div>
            </Card.Body>
        </Card>
        </div>
        </Container>
        </div>
        </div>
      </>
  )
}

export default Login
