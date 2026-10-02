import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  const trimmedName = name.trim()
  const isEven = count % 2 === 0

  return (
    <section className="counter-panel">
      <p className="count-display">{count}</p>
      <div className="counter-buttons">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((current) => current - 1)}
        >
          Decrease
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((current) => current + 1)}
        >
          Increase
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
      <p className="count-parity">
        {isEven ? 'even number' : 'odd number'}
      </p>
      <label className="name-field">
        Name
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Type your name"
        />
      </label>
      {trimmedName !== '' && (
        <p className="greeting">
          Hello, {trimmedName}! Welcome to my React app
        </p>
      )}
    </section>
  )
}

export default Counter
