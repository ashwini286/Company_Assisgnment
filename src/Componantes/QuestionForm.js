import React, { useState } from 'react';
import { uploadQuestion } from '../services/Api';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [attachment, setAttachment] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('question', question);
    formData.append('options', JSON.stringify(options));
    formData.append('correctAnswer', correctAnswer);
    formData.append('attachment', attachment);

    // Call the API to upload the question
    uploadQuestion(formData)
      .then(() => {

        // Reset form fields after successful upload
        setQuestion('');
        setOptions(['', '', '', '']);
        setCorrectAnswer('');
        setAttachment(null);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Upload Question</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => {
              const updatedOptions = [...options];
              updatedOptions[index] = e.target.value;
              setOptions(updatedOptions);
            }}
          />
        ))}
        <select
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        >
          <option value="">Select Correct Answer</option>
          {options.map((option, index) => (
            <option key={index} value={index}>
              Option {index + 1}
            </option>
          ))}
        </select>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAttachment(e.target.files[0])}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default QuestionForm;