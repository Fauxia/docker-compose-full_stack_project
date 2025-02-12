import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message,setMessage] = useState([])
  useEffect(()=>{
    async function getData(){
    try {
      const message = await fetch("http://localhost:5000/api/users")
      const users = await message.json()
      setMessage(users)
    } catch (error) {
      console.log(error);
    }
  }
  getData()
  },[])
  return (
    <div>
    <h1>Frontend React app</h1>
    {message.map(user=>(
      <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      </div>
    ))}
    </div>
  )
}

export default App
