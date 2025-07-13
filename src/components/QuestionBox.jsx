import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const shuffleArray = (arr) => {
  return [...arr].sort(() => Math.random() - 0.5);
};

const getRandomQuestions = (questions, count = 30) => {
  const unique = Array.from(new Set(questions.map((q) => JSON.stringify(q)))).map((q) =>
    JSON.parse(q)
  );
  return shuffleArray(unique).slice(0, count);
};

const QuestionBox = ({ topicMap }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const topicKey = id.toLowerCase();
  const allQuestions = topicMap[topicKey] || [];

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  useEffect(() => {
    if (!allQuestions.length) {
      navigate("/");
    } else {
      const randomQs = getRandomQuestions(allQuestions, 30);
      setQuestions(randomQs);
    }
  }, [id]);

  const currentQuestion = questions[currentIndex];
  const selectedOption = selectedOptions[currentIndex] || "";

  const handleSelection = (e) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentIndex]: e.target.value,
    });
    setError("");
  };

  const handleNext = () => {
    if (!selectedOptions[currentIndex]) {
      setError("Please select an option before proceeding.");
      return;
    }
    setError("");
    if (currentIndex === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleRetake = () => {
    setQuestions(getRandomQuestions(allQuestions, 30));
    setCurrentIndex(0);
    setSelectedOptions({});
    setShowResult(false);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (selectedOptions[index] === q.answer) {
        score++;
      }
    });
    return score;
  };

  if (!questions.length)
    return <p className="text-center text-black dark:text-white">Loading questions...</p>;

  return (
    <div className="min-h-screen w-full flex justify-center items-center relative px-4 py-10 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <div className="w-full max-w-4xl">
        {/* Back Button */}
        <div className="absolute top-4 left-4">
          <button
            onClick={() => setShowConfirmModal(true)}
            className="flex items-center gap-2 text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-white transition cursor-pointer"
          >
            <ArrowLeft size={20} />
            <span className="font-medium text-sm md:text-base">Back</span>
          </button>
        </div>

        {showResult ? (
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-semibold">Quiz Completed!</h1>
            <div className="w-full mt-8 sm:mt-10 flex justify-between items-center font-medium">
              <h2>Score</h2>
              <h2>{calculateScore()}/{questions.length}</h2>
            </div>
            <div className="mt-2 w-full h-2 bg-gray-300 dark:bg-zinc-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-black dark:bg-white rounded-full"
                style={{
                  width: `${(calculateScore() / questions.length) * 100}%`,
                }}
              ></div>
            </div>
            <p className="text-lg sm:text-xl mt-4">
              You answered {calculateScore()} questions correctly out of {questions.length}. Well done!
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleRetake}
                className="w-full sm:w-1/2 px-6 py-2 bg-sky-500 hover:bg-sky-600 rounded-lg text-white font-semibold transition"
              >
                Retake Quiz
              </button>
              <button
                onClick={() => navigate("/")}
                className="w-full sm:w-1/2 px-6 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-black dark:text-white rounded-lg font-semibold transition"
              >
                Back to Topics
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1 className="font-medium text-sm md:text-lg mb-2 mt-10 md:mt-0">
              Question {currentIndex + 1}/{questions.length}
            </h1>
            <div className="w-full h-2 bg-gray-300 dark:bg-zinc-700 rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-black dark:bg-white rounded-full"
                style={{
                  width: `${((currentIndex + 1) / questions.length) * 100}%`,
                }}
              ></div>
            </div>

            <div className="question mt-6 md:mt-10 mb-6">
              <h1 className="text-xl sm:text-2xl font-semibold">{currentQuestion.question}</h1>
            </div>

            <div className="options flex flex-col gap-y-3">
              {Object.entries(currentQuestion.options).map(([key, value]) => (
                <label
                  key={key}
                  className={`border px-4 py-3 rounded-md flex gap-4 items-center cursor-pointer transition ${
                    selectedOption === key
                      ? "border-black dark:border-white"
                      : "border-gray-300 dark:border-zinc-600"
                  }`}
                >
                  <input
                    type="radio"
                    name="answer"
                    value={key}
                    checked={selectedOption === key}
                    onChange={handleSelection}
                    className="h-4 w-4"
                  />
                  <span className="text-medium md:text-base">{value}</span>
                </label>
              ))}
            </div>
            {error && (
              <span className="text-red-500 text-sm mt-2 block">{error}</span>
            )}
            <div className="w-full flex flex-col sm:flex-row justify-between gap-2 mt-6">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className={`cursor-pointer w-full sm:w-auto px-6 py-2 rounded font-medium transition ${
                  currentIndex === 0
                    ? "bg-gray-400 dark:bg-zinc-700 text-white cursor-not-allowed"
                    : "bg-sky-500 hover:bg-sky-600 text-white"
                }`}
              >
                Previous
              </button>

              <button
                onClick={handleNext}
                className="cursor-pointer w-full sm:w-auto px-6 py-2 bg-sky-500 hover:bg-sky-600 rounded text-white font-medium transition"
              >
                {currentIndex === questions.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg w-full max-w-md text-black dark:text-white">
            <h2 className="text-lg md:text-xl font-semibold mb-4">Confirm Navigation</h2>
            <p className="mb-6 text-sm sm:text-base">Are you sure you want to go back to home? Your quiz progress will be lost.</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="p-2 text-sm sm:text-base md:px-4 md:py-2 bg-gray-300 hover:bg-gray-400 dark:bg-zinc-700 dark:hover:bg-zinc-600 rounded font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => navigate("/")}
                className="p-2 text-sm sm:text-base md:px-4 md:py-2 bg-red-500 hover:bg-red-600 text-white rounded font-medium"
              >
                Yes, Go Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionBox;
