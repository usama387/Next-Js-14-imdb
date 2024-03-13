import React from "react";

const Results = ({ results }) => {
  return (
    // #1 Here i map the results coming as prop from tmdb api
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <h2>{result.original_title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Results;
