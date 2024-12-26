import { useEffect } from 'react';
import Header from './Header';
import './index.css';
import Main from './Main';

function App() {
  useEffect(function () {
    async function getQuestions() {
      const res = await fetch('http://localhost:8000/questions');
      const data = await res.json();
      console.log(data);
    }

    getQuestions();
  }, []);

  return (
    <div>
      <Header />

      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;
