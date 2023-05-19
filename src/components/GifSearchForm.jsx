import { useId, useState } from 'react';

export default function GifSearchForm({ setSearchTerm }) {
  const inputId = useId();
  const formLabelId = useId();
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput);
    setSearchInput('');
  }

  return (
    <form onSubmit={handleSubmit} aria-labelledby={formLabelId}>
      <h2 id={formLabelId}>Search for a gif!</h2>

      <label htmlFor={inputId}>Enter a Search Term</label>
      <input
        type="text"
        id={inputId}
        onChange={handleChange}
        value={searchInput}
      />

      <button>Search</button>
    </form>
  )
}
