import React from "react";

function GamesTable(props) {
  const { games, isLoading, isError } = props;
  /* INSTRUCTION: Show "loading..." when isLoading is true */

  if (isLoading) {
    return <h2>loading...</h2>;
  }

  /* INSTRUCTION: Show "error" when isError is true */
  if (isError) {
    return <h2>error</h2>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Genres</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {/* INSTRUCTION: if games data is available, display the games in a table. if not, display a "No games found." message */}

        {games && games.length > 0 ? (
          games.map((game) => (
            <tr key={game.title}>
              <td>{game.title}</td>
              <td>
                {game.genres.map((genre, i) =>
                  game.genres.length - 1 === i ? genre : genre+", "
                )}
              </td>
              <td>{game.rating}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No games found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default GamesTable;
