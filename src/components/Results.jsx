import React from "react";
import Card from "./Card";

const Results = ({ results }) => {
  return (
    // #1 Adding responsiveness to card grid on different screens
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {/* #2 Here i map the results coming as prop from page.jsx and then i send result as prop to my card component */}
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
