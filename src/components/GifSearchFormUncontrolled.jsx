import { useId } from 'react';

export default function GifSearchForm({ setSearchTerm }) {
  const inputId = useId();
  const formLabelId = useId();
  const searchInputName = 'searchInput'; // don't useId on input names, those matter

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setSearchTerm(formData.get(searchInputName));
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} aria-labelledby={formLabelId}>
      <h2 id={formLabelId}>Search for a gif! (uncontrolled)</h2>

      <label htmlFor={inputId}>Enter a Search Term</label>
      <input type="text" id={inputId} name={searchInputName} />
      <button>Search</button>
    </form>
  )
}
