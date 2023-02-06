import  { useState} from 'react';

import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import {Statistics} from './Statistics/Statistics'
import {Section} from './Section/Section'

import {Notification} from './Notification/Notification'

const buttons = [
	{ id: "good", title: "Good" },
	{ id: "neutral", title: "Neutral" },
	{ id: "bad", title: "Bad" }
];
   
export const App = () => {

const [feetback, setFeetback] = useState({
  good: 0,
  neutral: 0,
  bad: 0,
});

const countTotalFeedback = feetback.good +feetback.neutral+feetback.bad
  
  const handlClickFeedback = e => {
    const {name} = e.target
    setFeetback(feetback=>({...feetback, [name]:feetback[name] + 1}));
  }; 

const countPositiveFeedback = () => {
if (countTotalFeedback ===0) {
  return 0
} 
return  Math.round((feetback.good/countTotalFeedback) *100) ;
  }
console.log(countPositiveFeedback())

  return (
    <div>
    <Section
    title={"Please leave feedback"}>
   <FeedbackOptions
     buttons={buttons} 
     handlClickFeedback={handlClickFeedback}/>
    </Section>
  
     <Section title={"Statistics"}>
     {countTotalFeedback > 0 ? (
      <Statistics 
      good={feetback.good} 
      neutral={feetback.neutral} 
      bad={feetback.bad} 
      total={countTotalFeedback} 
      positivePercentage={countPositiveFeedback()}
      />
      ) : (
      <Notification message={"There is no feedback"}/>
      )}
</Section>

  </div>
  );
  };





