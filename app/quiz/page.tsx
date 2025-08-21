
// 'use client';
// import React, { useState } from 'react';
// import { quiz } from '../data/data';
// import { FaArrowRightLong } from 'react-icons/fa6';

// export default function QuizPage() {
//   const { questions } = quiz;

//   const [activeQuestion, setActiveQuestion] = useState(0);
//   const [selectedAnswerIsCorrect, setSelectedAnswerIsCorrect] = useState(null); // null | true | false
//   const [checked, setChecked] = useState(false);
//   const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
//   const [showResult, setShowResult] = useState(false);
//   const [result, setResult] = useState({
//     score: 0,
//     correctAnswers: 0,
//     wrongAnswers: 0,
//   });

//   const current = questions[activeQuestion];

//   // Select and check answer
//   const onAnswerSelected = (answer, index) => {
//     setChecked(true);
//     setSelectedAnswerIndex(index);
//     setSelectedAnswerIsCorrect(answer === current.correctAnswer);
//   };

//   // Calculate score and go to next question
//   const nextQuestion = () => {
//     setResult(prev =>
//       selectedAnswerIsCorrect
//         ? {
//             ...prev,
//             score: prev.score + 5,
//             correctAnswers: prev.correctAnswers + 1,
//           }
//         : {
//             ...prev,
//             wrongAnswers: prev.wrongAnswers + 1,
//           }
//     );

//     if (activeQuestion < questions.length - 1) {
//       setActiveQuestion(prev => prev + 1);
//     } else {
//       setShowResult(true);
//     }

//     // reset per-question state
//     setChecked(false);
//     setSelectedAnswerIndex(null);
//     setSelectedAnswerIsCorrect(null);
//   };

//   const totalPoints = questions.length * 5;
//   const percent = Math.round((result.score / totalPoints) * 100);

//   return (
//     <div className=" flex flex-col justify-center items-center gap-5 mt-5">
//       <h1 className='text-3xl font-bold text-black'>Quiz Page</h1>

//       <div>
//         <h2 className='text-lg'>
//           Question: {Math.min(activeQuestion + 1, questions.length)}
//           <span>/{questions.length}</span>
//         </h2>
//       </div>

//       <div className='p-5 bg-white shadow-2xl rounded-3xl text-center'>
//         {!showResult ? (
//           <div className="quiz-container">
//             <h3 className='text-2xl font-semibold text-black mb-5'>{current.question}</h3>

//             <ul className=' grid grid-cols-1 gap-3 mb-3 text-left'>
//               {current.answers.map((answer, index) => (
//                 <li
//                   key={index}
//                   onClick={() => onAnswerSelected(answer, index)}
//                   className={selectedAnswerIndex === index ? 'border-2 border-[#1d4ed8] p-3 rounded-xl ' : 'p-3 rounded-xl border-background border-2 hover:border-[#1d4ed8]'}
//                 >
//                   <span>{answer}</span>
//                 </li>
//               ))}
//             </ul>

//             <button
//               onClick={nextQuestion}
//               className={checked ? 'rounded-2xl text-lg text-white bg-[#1d4ed8] py-2 px-7' : 'rounded-2xl text-lg text-white bg-[#1d4ed8] py-2 px-7'}
//               disabled={!checked}
//             >
//               {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
//             </button>
//           </div>
//         ) : (
//           <div className="text-center w-[300px]">
//             <h3 className='text-3xl font-bold text-black mb-5 text-left'>Results</h3>
//             <p className='text-lg text-black font-normal mb-1.5 flex items-center justify-between'>Overall <FaArrowRightLong/>  <span className='text-xl font-semibold'>{percent} %</span></p>
//             <p className='text-lg text-black font-normal mb-1.5 flex items-center justify-between'>
//               Total Questions <FaArrowRightLong/> <span className='text-xl font-semibold'>{questions.length}</span>
//             </p>
//             <p className='text-lg text-black font-normal mb-1.5 flex justify-between items-center'>
//               Total Score <FaArrowRightLong/> <span className='text-xl font-semibold'>{result.score}</span>
//             </p>
//             <p className='text-lg text-black font-normal mb-1.5 flex items-center justify-between'>
//               Correct Answers <FaArrowRightLong/>  <span className='text-xl font-semibold text-green-700 '>{result.correctAnswers}</span>
//             </p>
//             <p className='text-lg text-black font-normal mb-1.5 flex items-center justify-between'>
//               Wrong Answers <FaArrowRightLong/>   <span className='text-xl font-semibold text-red-700'>{result.wrongAnswers}</span>
//             </p>
//             <button onClick={() => window.location.reload()} className='mt-3 rounded-2xl text-lg text-white bg-[#1d4ed9] py-2 px-4 self-center'>Restart</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


'use client';
import React, { useState } from 'react';
import { quiz } from '../data/data';
import { FaArrowRightLong } from 'react-icons/fa6';

type Question = {
  question: string;
  answers: string[];
  correctAnswer: string;
};

interface Quiz {
  questions: Question[];
}

interface Result {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
}

export default function QuizPage(){
  // If `quiz` doesn't have types, assert it here.
  const { questions } = quiz as Quiz;

  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswerIsCorrect, setSelectedAnswerIsCorrect] = useState<boolean | null>(null); // null | true | false
  const [checked, setChecked] = useState<boolean>(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [result, setResult] = useState<Result>({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const current = questions[activeQuestion];

  // Select and check answer — typed parameters
  const onAnswerSelected = (answer: string, index: number) => {
    setChecked(true);
    setSelectedAnswerIndex(index);
    setSelectedAnswerIsCorrect(answer === current.correctAnswer);
  };

  // Calculate score and go to next question
  const nextQuestion = () => {
    setResult(prev =>
      selectedAnswerIsCorrect
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (activeQuestion < questions.length - 1) {
      setActiveQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }

    // reset per-question state
    setChecked(false);
    setSelectedAnswerIndex(null);
    setSelectedAnswerIsCorrect(null);
  };

  const totalPoints = questions.length * 5 || 1; // avoid division by zero
  const percent = Math.round((result.score / totalPoints) * 100);

  return (
    <div className=" flex flex-col justify-center items-center gap-5 mt-5">
      <h1 className='text-3xl font-bold text-black'>Quiz Page</h1>

      <div>
        <h2 className='text-lg'>
          Question: {Math.min(activeQuestion + 1, questions.length)}
          <span>/{questions.length}</span>
        </h2>
      </div>

      <div className='p-5 bg-white shadow-2xl rounded-3xl text-center'>
        {!showResult ? (
          <div className="quiz-container">
            <h3 className='text-2xl font-semibold text-black mb-5'>{current.question}</h3>

            <ul className=' grid grid-cols-1 gap-3 mb-3 text-left'>
              {current.answers.map((answer, index) => (
                <li
                  key={index}
                  onClick={() => onAnswerSelected(answer, index)}
                  className={
                    selectedAnswerIndex === index
                      ? 'border-2 border-[#1d4ed8] p-3 rounded-xl '
                      : 'p-3 rounded-xl border-background border-2 hover:border-[#1d4ed8]'
                  }
                >
                  <span>{answer}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={nextQuestion}
              className={checked ? 'rounded-2xl text-lg text-white bg-[#1d4ed8] py-2 px-7' : 'rounded-2xl text-lg text-white bg-[#1d4ed8] py-2 px-7'}
              disabled={!checked}
            >
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        ) : (
          <div className="text-center w-[300px]">
            <h3 className='text-3xl font-bold text-black mb-5 text-left'>Results</h3>
            <p className='text-lg text-black font-normal mb-1.5 flex items-center justify-between'>Overall <FaArrowRightLong/>  <span className='text-xl font-semibold'>{percent} %</span></p>
            <p className='text-lg text-black font-normal mb-1.5 flex items-center justify-between'>
              Total Questions <FaArrowRightLong/> <span className='text-xl font-semibold'>{questions.length}</span>
            </p>
            <p className='text-lg text-black font-normal mb-1.5 flex justify-between items-center'>
              Total Score <FaArrowRightLong/> <span className='text-xl font-semibold'>{result.score}</span>
            </p>
            <p className='text-lg text-black font-normal mb-1.5 flex items-center justify-between'>
              Correct Answers <FaArrowRightLong/>  <span className='text-xl font-semibold text-green-700 '>{result.correctAnswers}</span>
            </p>
            <p className='text-lg text-black font-normal mb-1.5 flex items-center justify-between'>
              Wrong Answers <FaArrowRightLong/>   <span className='text-xl font-semibold text-red-700'>{result.wrongAnswers}</span>
            </p>
            <button onClick={() => window.location.reload()} className='mt-3 rounded-2xl text-lg text-white bg-[#1d4ed9] py-2 px-4 self-center'>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
}

