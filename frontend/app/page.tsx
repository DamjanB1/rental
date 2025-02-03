import { useEffect, useState } from 'react'

const Home = () => {
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    fetch('http://localhost:3001')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Welcome to Our Vacation Rental App</h1>
      <p>{message}</p>
    </div>
  )
}

export default Home