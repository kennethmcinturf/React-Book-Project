import React from "react";

const SortButton = ({ sort, onSortInput }) => (
  <>
    <form onSubmit={onSortInput}>
      <select>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="num_comments">Number of Comments</option>
        <option value="points">Number of Points</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  </>
);

export default SortButton;
