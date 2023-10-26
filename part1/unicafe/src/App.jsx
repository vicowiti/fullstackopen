import { useState } from "react";

const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <>
      {total > 0 ? (
        <>
          <h2>statistics</h2>
          <table>
            <tbody>
              <StatisticLine name="good" value={good} />
              <StatisticLine name="neutral" value={neutral} />
              <StatisticLine name="bad" value={bad} />
              <StatisticLine name="all" value={total} />
              <StatisticLine
                name="average"
                value={((good * 1 + neutral * 0 + bad * -1) / total).toFixed(2)}
              />
              <StatisticLine
                name="positive"
                value={`${((good / total) * 100).toFixed(2)}%`}
              />
            </tbody>
          </table>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

const Button = ({ text, clickHandler }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

const StatisticLine = ({ name, value, extra }) => {
  return (
    <tr>
      <td>{name} </td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood((k) => k + 1);
  };
  const handleNeutral = () => {
    setNeutral((k) => k + 1);
  };
  const handleBad = () => {
    setBad((K) => K + 1);
  };

  let total = good + bad + neutral;
  return (
    <div>
      <h1>Give feedback</h1>
      <section>
        <Button text="good" clickHandler={handleGood} />
        <Button text="neutral" clickHandler={handleNeutral} />
        <Button text="bad" clickHandler={handleBad} />
      </section>

      <Statistics good={good} bad={bad} neutral={neutral} total={total} />
    </div>
  );
};

export default App;
