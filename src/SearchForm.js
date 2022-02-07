import React, { useState } from "react"

const SearchForm = ({searchText}) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    searchText(text)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. politics"
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SearchForm