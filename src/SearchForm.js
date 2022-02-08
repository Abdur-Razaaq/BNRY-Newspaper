import React, { useState } from "react"

const SearchForm = ({searchText}) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    searchText(text)
  }

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="e.g. politics"
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button className="search-btn" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SearchForm