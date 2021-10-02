import { useState } from 'react'

export const SampleComponent = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount((counter) => counter + 1)}>
        Count {count}
      </button>
    </div>
  )
}
