import './index.scss';
import React from 'react';
import  ReactDOM  from 'react-dom';

const questions = [
  {
    title: 'React - це ... ?',
    variants: ['бібліотека', 'фреймворк', 'програма'],
    correct: 0,
  },
  {
    title: 'Компонент - це ... ',
    variants: ['програма', 'частина програми або сторінки', 'хз'],
    correct: 1,
  },
  {
    title: 'Що таке JSX?',
    variants: [
      'Це простий HTML',
      'Це функція',
      'Це той самий HTML, але з функцією виконувати JS-код',
    ],
    correct: 2,
  },
  {
    title: 'Хну - це ...',
    variants: ['школа', 'садік','щось цікаве'],
    correct:2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Ви відповіли на {correct} відповіді з {questions.length}</h2>
      <a href='/'>
      <button>Спробувати ще раз</button>
      </a>
    </div>
  );
}
function Game({ step, question, onClickVariant }) {
const precentage = Math.round((step/questions.length)*100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${precentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text,index) => (
          <li onClick = {() => onClickVariant(index)} key={text}>{text}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step,setStep] = React.useState(0);
  const [correct,setCorrect] = React.useState(0);
  const question = questions[step];
  const onClickVariant = (index) => {
    console.log(step,index);
    setStep(step + 1);

    if(index === question.correct){
      setCorrect(correct+1);
    }
  }
  return (
    <div className="App">
      {
        step !== questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant}/> : <Result correct={correct}/>
      }
      
    </div>
  );
}

export default App;
