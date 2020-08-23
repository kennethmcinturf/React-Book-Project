import React from 'react';

import InputWithLabel from './InputWithLabel';

const SearchForm = ({
  searchTerm,
  searches,
  onSearchInput,
  onSearchSubmit,
}) => {
  return (<form onSubmit={onSearchSubmit}>
      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={onSearchInput}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <button type="submit" disabled={!searchTerm}>
        Submit
      </button>
    </form>
  )
};

export default SearchForm;