
import React  ,{useState ,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    
    const [username ,SetUsername]  = useState(' ')
    const [password ,SetPass]  = useState(' ')


    const {setUser}  = useContext(UserContext)

    

const handleSubmit = (e)=>{
    e.preventDefault()
    setUser({username,password})
    }


  return (
    <div>
        <h2>Login</h2>

        <input type="text" 
        value={username}
        onChange={(e)=>SetUsername(e.target.value)}
        placeholder='username'/>

<br />
       <input type="text"  
         value={password}
        onChange={(e)=>SetPass(e.target.value)}
       placeholder='password'/>
       <button onClick={handleSubmit}>Submit</button>


    </div>
  )
}

export default Login