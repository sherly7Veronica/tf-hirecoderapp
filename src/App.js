import { useState } from 'react'

export default function App() {
  const [message, setMessage] = useState('');

  return (
    <div>
      <h1>Task list</h1>
      <input
        type="email"
        value={message}
        onChange={event => setMessage(event.target.value)}
      />

      <button disabled={!message}>Submit</button>
    </div>
  )
}