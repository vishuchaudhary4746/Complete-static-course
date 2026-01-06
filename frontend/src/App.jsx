import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []) // ✅ runs only once

  return (
    <div>
      <h1>Hello jii</h1>

      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App
