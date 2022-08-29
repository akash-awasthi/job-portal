import React, { useEffect, useRef, useState } from 'react'
import { Form, Button, Card, Alert ,Container} from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const { type, setType } = useAuth();
    const { userRoleList } = useAuth();
    const navigate = useNavigate();
    console.log("Login page :", type);
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            try{
            console.log("Dekho wo aagaya")
            const x = userRoleList.filter((u) => {
                return u.email === emailRef.current.value;
            })
            setType(x[0].type)
            }
            catch{
                console.log("Login to ho gya magar id match nhin hui")
            }
            navigate('/');

        }
        catch {
            setError('Failed To Login');
        }
        setLoading(false)
    }
    return (
        <>
        <div className='bg-image loginbackground'>
        <div >
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "90vh" }}
        >
         <div className="w-100 shadow p-3 mb-5 bg-light rounded border border-primary" style={{ maxWidth: "400px" }}>
 
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} >
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control ref={emailRef} type="email" required></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required></Form.Control>
            </Form.Group><br/>
            <Button  className="w-100" disabled={loading} type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forget Password</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Do not have account ? <Link to="/signup">Sign Up</Link>
      </div>
      </div>
      </Container>
      </div>
      </div>
     </>   
    )
}

export default Login