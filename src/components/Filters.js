import React from "react";

function Filters(props) {
  const {
    search,
    genre,
    sort,
    limit,
    genres,
    onSearchChange,
    onGenreChange,
    onSortChange,
    onLimitChange,
  } = props;
  return (
    <div className="filters">
      {/* INSTRUCTION: Add a text input for searching by title */}
      <input
        placeholder="Search by title"
        onChange={(e) => onSearchChange(e.target.value)}
        value={search}
      />

      {/* INSTRUCTION: Add a selector for filtering by genre */}
      <select onChange={(e) => onGenreChange(e.target.value)} value={genre}>
        <option value={"all"}>All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      {/* INSTRUCTION: Add a selector for sorting */}
      <select onChange={(e) => onSortChange(e.target.value)} value={sort}>
        <option value={"noSorting"}>No Sorting</option>
        <option value={"rating"}>Sort by Rating</option>
        <option value={"title"}>Sort by Title</option>
      </select>

      {/* INSTRUCTION: Add a selector for limiting the number of games per page */}
      <select onChange={(e) => onLimitChange(e.target.value)} value={limit}>
        <option value={5}>5 per page</option>
        <option value={10}>10 per page</option>
        <option value={999999}>Show All</option>
      </select>
    </div>
  );
}

export default Filters;
