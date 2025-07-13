import React from "react";
import Cards from "./Cards";

const Topics = () => {
  return (
    <div id="topics" className="h-full w-full p-2 md:p-10">
      <h1 className="text-center md:text-start text-2xl sm:text-3xl font-bold text-black/80 dark:text-white">Available Topics</h1>
      <Cards />
    </div>
  );
};

export default Topics;
