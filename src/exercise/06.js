// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

const ERROR_MESSAGE = 'Username must be lower case'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  const [error, setError] = React.useState(null)

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={inputRef}
          id="username"
          type="text"
          onChange={handleChange}
        />
      </div>
      <button className="submitButton" type="submit" disabled={!!error}>
        Submit
      </button>
      {error && (
        <p className="errorMessage" role="alert">
          {error}
        </p>
      )}
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    if (!error) {
      const username = inputRef.current?.value ?? ''
      onSubmitUsername(username)
    }
  }

  function handleChange(event) {
    const username = event.target.value
    if (username === username?.toLowerCase()) {
      setError(null)
    } else {
      setError(ERROR_MESSAGE)
    }
  }
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
