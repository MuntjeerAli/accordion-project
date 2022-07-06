import React from 'react';
import SingleQuestion from './components/SingleQuestion';
import questions from './data';
import './index.css'

const App = () => {
  return (
    <main>
      <div className='content'>
        <h3 className='title'>
        Frequently Asked Questions
        </h3>
        <section className='info'>
          {questions.map((question) =>{
            return <SingleQuestion key={question.id} {...question}/>;
          })}
        </section>
      </div>
    </main>
  )
}

export default App
