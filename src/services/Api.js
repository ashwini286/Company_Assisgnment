// Example functions for API calls
export const uploadQuestion = (formData) => {
  // Implement the API call to upload the question
  return fetch('/api/questions', {
    method: 'POST',
    body: formData,
  }).then((response) => response.json());
};

export const getQuestions = () => {

  // Implement the API call to fetch questions

  return fetch('/api/questions').then((response) => response.json());
};