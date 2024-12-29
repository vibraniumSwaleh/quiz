import { useEffect } from 'react';

function Timer({ dispatch, seconds }) {
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: 'tick' });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch],
  );
  return <div className='timer'>{seconds}</div>;
}

export default Timer;
