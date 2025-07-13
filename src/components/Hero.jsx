import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="px-2 py-10 sm:px-6 md:px-10 h-full w-full flex justify-center items-center transition-colors duration-500">
      <div className="w-full max-w-7xl h-[60vh] sm:h-[70vh] bg-gradient-to-br from-zinc-900 via-zinc-600 to-zinc-300 dark:from-zinc-200 dark:via-zinc-600 dark:to-zinc-900 rounded-2xl flex justify-center items-center text-white transition-all duration-500">
        <div className="flex flex-col justify-center items-center text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Test Your Knowledge
          </h1>
          <p className="text-sm sm:text-base mt-4 opacity-75 max-w-md">
            Explore a variety of quizzes on different technical topics.
            Challenge yourself and improve your skills.
          </p>
          <a href="#topics" className="mt-6 px-4 py-2 md:px-6 md:py-2 text-sm sm:text-base bg-sky-500 hover:bg-sky-600 rounded-lg text-white font-medium cursor-pointer transition-colors duration-300">
            Start Quiz
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
