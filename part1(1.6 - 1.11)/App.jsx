import { useState } from 'react'

const Button = (props) => {
  return(
  <button onClick={props.handleClick}>{props.text}</button>)
}

const Title = (props) =>{
  return (
    <div>
      <p>{props.title}</p>
    </div>
  )
}

const Subtitle = (props) => {
  return(
    <div>
      <p>{props.subtitle}</p>
    </div>
  )
}


const StatisticLine = (props) => {
    return(
      <tr>
        <td>{props.text}: {props.value}</td>
      </tr>
    )
}


const App = () => {
  const title  = "give feedback";
  const subtitle = "statistics";
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);
  const all = good + bad + neutral;
  const avg = all === 0 ? 0 : (good - bad) / all;
  const percent = (good * 100) / all
  

  return (
    <div>
      <Title title = {title}/>
      <Button handleClick = {incrementGood} text="good"/>
      <Button handleClick = {incrementNeutral} text="neutral"/>
      <Button handleClick = {incrementBad} text="bad"/>
      <Subtitle subtitle = {subtitle} />
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
      <table>
          <tbody>
            <StatisticLine value={good} text = "good" /> 
            <StatisticLine value={neutral} text = "neutral"/>
            <StatisticLine value={bad} text = "bad"/>
            <StatisticLine value = {all} text = "all"/>
            <StatisticLine value = {avg} text = "average" />
            <StatisticLine value = {percent} text = "percentage"/>
          </tbody>
      </table>
      )}
    </div>
  )
}


export default App
