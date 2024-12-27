function NextButton({ dispatch, answer, numQuestions, index }) {
  if (answer === null) return;
  console.log('answer', answer);

  if (index < numQuestions - 1) {
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'finish' })}
      >
        Finish
      </button>
    );
  }
}

export default NextButton;
