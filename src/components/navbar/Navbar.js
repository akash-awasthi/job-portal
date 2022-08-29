import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Link , useNavigate} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext'

function Header() {
  const {type}=useAuth();
  const {currentUser , logout} = useAuth();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { deleteUser,deleteUserType } = useAuth();

  const handleLogout = async () => {
    setError('');
    try {
      await logout();
      navigate('/');
    }
    catch {
      setError("Failed to Logout");
    }
  }
  function handleDelete() {
    try{
      deleteUserType();
    }
    catch{
      console.log("Failed to deleteDoc");
    }
    try {
      deleteUser();
      navigate('/');
    }
    catch
    {
      setError("Failed to Delete");
    }
  }
  return (
    <>
{currentUser 
?  <><nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
  <div className="container">
    <a className="navbar-brand fw-bold fs-4" >IA WORKS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <Link to='/' style={{textDecoration:"none"}}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Home</a>
        </li>
      </Link>
    <Link to='/about' style={{textDecoration:"none"}}>
        <li className="nav-item">
          <a className="nav-link active" >About</a>
        </li>
      </Link>
      <Link to='/Contact' style={{textDecoration:"none"}}>
        <li className="nav-item">
          <a className="nav-link active" >Contact Us</a>
        </li>
      </Link>

     
      {type=="0" && <><Link to="/UpdateJobSeeker" style={{textDecoration:"none"}}>
        <li className="nav-item">
          <a className="nav-link active" >Update Details</a>
        </li>
      </Link>
      <Link to="/JobSeekerViewJobs" style={{textDecoration:"none"}}>
        <li className="nav-item">
          <a className="nav-link active" >View Jobs</a>
        </li>
      </Link></>}
      {type=="1" && <><Link to="/PostJob" style={{textDecoration:"none"}}>
        <li className="nav-item">
          <a className="nav-link active" >Post a JOb</a>
        </li>
      </Link>
      <Link to="/JobPostedByMe" style={{textDecoration:"none"}}>
        <li className="nav-item">
          <a className="nav-link active" >My Posts</a>
        </li>
      </Link></>}
        
      </ul>
     
      <div className='buttons'>
        <a  className='btn btn-outline-light ms-2' onClick={handleLogout}>
          <i className='fa fa-power-off me-1'></i> Logout</a>
      </div>
    </div>
  </div>
</nav></> 
: <><nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
  <div className="container">
    <a className="navbar-brand fw-bold fs-4" >IA WORKS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <Link to='/' style={{textDecoration:"none"}}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Home</a>
        </li>
      </Link>
    <Link to='/about' style={{textDecoration:"none"}}>
        <li className="nav-item">
          <a className="nav-link active" >About</a>
        </li>
      </Link>
      <Link to='/Contact' style={{textDecoration:"none"}}>
        <li className="nav-item">
          <a className="nav-link active" >Contact Us</a>
        </li>
      </Link>

      </ul>
      <Link to='/login'>
      <div className='buttons'>
        <a className='btn btn-outline-light'>
          <i className='fa fa-sign-in me-1'></i> Login</a>         
      </div>
      </Link>
      <Link to="/signup" >
      <div className='buttons'>
        <a  className='btn btn-outline-light ms-2'>
          <i className='fa fa-user-plus me-1'></i> Register</a>
      </div>
      </Link>
    </div>
  </div>
</nav></>}
    </>
  )
}

export default Header
