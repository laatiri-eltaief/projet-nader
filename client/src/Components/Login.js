import React,{ useState } from 'react'
import { userLogin } from '../Actions/AuthAction'
import {useDispatch, useSelector} from 'react-redux'
import {Spinner} from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email:"",
    password:""
  })
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const loading=useSelector(state=>state.AutoReducer.loading) 
  const handlechange=(e)=> {
    setUserInfo({...userInfo,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <input type="text" placeholder="email" onChange={handlechange}name="email"/>
      <input type="password" placeholder="password" onChange={handlechange}name="password"/>
      <button onClick={()=>dispatch(userLogin(userInfo))} >  { loading ? <Spinner animation="border" role="status">
      <button className='btn btn-success' style={{}} onClick={()=>navigate('/movies')}>Back</button>

      <span className="visually-hidden">Loading...</span>
    </Spinner> : "Login"}  </button>
     
    </div>
  )
}
export default Login
