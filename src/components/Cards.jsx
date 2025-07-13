import React from "react";
import SingleCard from "./SingleCard";
import osImg from "/os.jpg";
import dbmsImg from "/dbms.jpg";
import programmingImg from "/programming.jpg";
import reactImg from "/react.png";
import jsImg from "/js.jpg";

const Cards = () => {
  const topics = [
    {
      id: "os",
      name: "Operating Systems",
      desc: "Test your understanding of OS concepts.",
      img: osImg,
    },
    {
      id: "dbms",
      name: "Database Management Systems",
      desc: "Assess your knowledge of database systems.",
      img: dbmsImg,
    },
    {
      id: "programming",
      name: "Programming Fundamentals",
      desc: "Challenge yourself with programming questions.",
      img: programmingImg,
    },
    {
      id: "javascript",
      name: "JavaScript",
      desc: "Master core JavaScript concepts through fun and challenging quizzes.",
      img: jsImg,
    },
    {
      id: "react",
      name: "React JS",
      desc: "Test your React knowledge with practical, hands-on quiz questions.",
      img: reactImg,
    },
  ];
  return (
    <div className="cards mt-8 flex flex-wrap shrink-0 items-center justify-center gap-4">
      {topics.map((item, index) => {
        return <SingleCard key={index} topic={item} />;
      })}
    </div>
  );
};

export default Cards;
