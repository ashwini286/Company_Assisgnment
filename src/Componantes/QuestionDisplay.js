import React, { useEffect, useState } from 'react';
import { getQuestions } from '../services/Api';

const QuestionDisplay = () => {
  const [questions, setQuestions] = useState([{
    questionText: "Who is known as the ” Father of White Revolution ” in India ?",
    answerOptions: [
        { answerText: "Gita Devi", isCorrect: false},
        { answerText: "Fathima Beevi", isCorrect: false},
        { answerText: "Verghese Kurien", isCorrect: true},
        { answerText: "Sarojini Naidu", isCorrect: false}

    ],
},
{

    questionText: "Who was the first woman to become a judge of the Supreme Court of India ?",
    answerOptions: [
        { answerText: "Gita Devi", isCorrect: false},
        { answerText: "Fathima Beevi", isCorrect: true},
        { answerText: "Ramanuj Singh", isCorrect: false},
        { answerText: "Shyam Singh", isCorrect: false}

    ],
},
{
    questionText: "Who was the first and Only woman Prime Minister of India ?",
    answerOptions: [
        { answerText: "Smt. Indira Gandhi", isCorrect: true},
        { answerText: "Sarojini Naidu", isCorrect: false},
        { answerText: "Devika Rani", isCorrect: false},
        { answerText: "Fathima Beevi", isCorrect: false}

    ],

},
{
    questionText: "Who was the first woman governor of any Indian state ?",
    answerOptions: [
        { answerText: "Smt. Indira Gandhi", isCorrect: false},
        { answerText: "Sarojini Naidu", isCorrect: true},
        { answerText: "Devika Rani", isCorrect: false},
        { answerText: "Fathima Beevi", isCorrect: false}

    ],

},
{
    questionText: "Who won the first Dadasaheb Phalke Award in 1969 ?",
    answerOptions: [
        { answerText: "Smt. Indira Gandhi", isCorrect: false},
        { answerText: "Sarojini Naidu", isCorrect: false},
        { answerText: "Devika Rani", isCorrect: true},
        { answerText: "Fathima Beevi", isCorrect: false}

    ],

},
{
    questionText: "Jivraj Narayan Mehta was the first Chief Minister of India in which state ?",
    answerOptions: [
        { answerText: "patna", isCorrect: false},
        { answerText: "Gujarat", isCorrect: true},
        { answerText: "Delhi", isCorrect: false},
        { answerText: "Pune", isCorrect: false}

    ],

},
{
    questionText: "Who Was the first Recipient of the Aadhaar Card ?",
    answerOptions: [
        { answerText: "Bhanu Athaiya", isCorrect: false},
        { answerText: "Field marshal", isCorrect: true},
        { answerText: "Devika Rani", isCorrect: false},
        { answerText: "Ranjana Sonawane", isCorrect: true}

    ],
},
{
    questionText: "In which year was C.V. Raman awarded the Nobel Prize in Physics ?",
    answerOptions: [
        { answerText: "1930", isCorrect: true},
        { answerText: "1941", isCorrect: false},
        { answerText: "1958", isCorrect: false},
        { answerText: "1955", isCorrect: true}

    ],
},
{
    questionText: "When was the first general election held in independent India ?",
    answerOptions: [
        { answerText: "1930", isCorrect: false},
        { answerText: "1951", isCorrect: true},
        { answerText: "1958", isCorrect: false},
        { answerText: "1955", isCorrect: true}

    ],
}, 
{
    questionText: "When was the first passenger train ran in India ?",
    answerOptions: [
        { answerText: "1853", isCorrect: true},
        { answerText: "1854", isCorrect: false},
        { answerText: "1896", isCorrect: false},
        { answerText: "1848", isCorrect: true}

    ],
}]);

//   useEffect(() => {
//     // Fetch questions from the API
//     fetch('https://the-trivia-api.com/v2/questions')
//     .then((res) => res.json)
//     .then((data) => {
//         setQuestions(data.results)
//     })
//     getQuestions()
//       .then((data) => {
//         setQuestions(data);
//       })
//       .catch((error) => {
//         // Handle error
//         console.log(error);
//       });
//   }, []);

  return (
    <div>
      <h3>Questions</h3>
      {questions.map((question) => (
        <div key={question.index}>
          <h4>{question.question}</h4>
          <ul>
            {question.answerOptions.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuestionDisplay;

