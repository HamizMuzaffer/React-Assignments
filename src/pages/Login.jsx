import { useState } from 'react'
import React  from 'react'
import Button from '../components/Button'
function Login() {
    const [username, setUserName] = useState("")
    const [password , setPassword] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR',
    expiresInMins: 30, // optional, defaults to 60
  }
  )

})
.then(res => res.json())
.then(console.log);
      };
    
  return (


    <div>
<form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
    </div>
  )
}

export default Login