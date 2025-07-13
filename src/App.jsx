import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Topics from "./components/Topics";
import QuestionBox from "./components/QuestionBox";

import jsQuestions from "./data/JsQuestions";
import osQuestions from "./data/OsQuestions";
import dbmsQuestions from "./data/DbmsQuestions";
import reactQuestions from "./data/ReactQuestions";
import programmingQuestions from "./data/FundamentalsQuestions";

const topicMap = {
  javascript: jsQuestions,
  os: osQuestions,
  dbms: dbmsQuestions,
  react: reactQuestions,
  programming: programmingQuestions,
};

const App = () => {
  const location = useLocation();
  const isQuizPage = location.pathname.startsWith("/quiz/");

  return (
    <div className="max-w-8xl mx-auto min-h-screen transition-colors duration-500 bg-white text-black dark:bg-zinc-800 dark:text-white">
      <Navbar />

      <Routes>
        <Route
          path="/quiz/:id"
          element={<QuestionBox topicMap={topicMap} />}
        />
        {!isQuizPage && (
          <Route
            path="/"
            element={
              <div className="w-[90%] mx-auto">
                <Hero />
                <Topics />
              </div>
            }
          />
        )}
      </Routes>
    </div>
  );
};

export default App;
