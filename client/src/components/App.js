import React from "react"
import { useCats } from "../hooks"

function App() {
  const categories = useCats()

  return (
    <div>
      {categories.map(cat => (
        <a href="#">{cat.name}</a>
      ))}
    </div>
  )
}

export default App
