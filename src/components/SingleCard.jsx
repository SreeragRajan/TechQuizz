import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ topic }) => {
  return (
    <Link
      to={`/quiz/${topic.id}`}
      className="card w-full sm:w-[280px] md:w-[300px] lg:w-[320px] h-[320px] sm:h-[340px] md:h-[360px] lg:h-[380px] rounded-xl border border-gray-300 overflow-hidden shadow hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer bg-white dark:bg-zinc-900"
    >
      <img
        src={topic.img}
        className="h-[70%] w-full object-cover"
        alt={topic.name}
      />
      <div className="p-4 h-[30%] w-full flex flex-col justify-center items-center text-center">
        <h2 className="text-base sm:text-lg font-semibold text-black/80 dark:text-white leading-snug">
          {topic.name}
        </h2>
        <p className="text-xs sm:text-sm mt-1 text-black/60 dark:text-white/80 max-w-xs">
          {topic.desc}
        </p>
      </div>
    </Link>
  );
};

export default SingleCard;
