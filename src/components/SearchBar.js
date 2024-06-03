import './SearchBar.css'
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleChange = (event) => {
    let value = event.target.value

    setTerm(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input
          type="text"
          placeholder='What are you searching for?'
          value={term}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default SearchBar;