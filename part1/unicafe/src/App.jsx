import { useState } from "react";

const Header = () => {
  return <h1>give feedback</h1>;
};
const Content = () => {
  return <h1>statistics</h1>;
};

const Statistics = (props) => {
  return (
    <p>
      {props.text}: {props.value}
    </p>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const goodClick = () => {
    const newGood = good + 1;
    setGood(newGood);
    const newAll = all + 1;
    setAll(newAll);
    const newTotal = total + 1;
    setTotal(newTotal);
    const newAverage = newTotal / newAll;
    setAverage(newAverage);
    const newPositive = (newGood / newAll) * 100;
    setPositive(newPositive);
  };

  const badClick = () => {
    const newBad = bad + 1;
    setBad(newBad);
    const newAll = all + 1;
    setAll(newAll);
    const newTotal = total - 1;
    setTotal(newTotal);
    const newAverage = newTotal / newAll;
    setAverage(newAverage);
    const newPositive = (good / newAll) * 100;
    setPositive(newPositive);
  };

  const neutralClick = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    const newAll = all + 1;
    setAll(newAll);
    const newTotal = total + 0;
    setTotal(newTotal);
    const newAverage = newTotal / newAll;
    setAverage(newAverage);
    const newPositive = (good / newAll) * 100;
    setPositive(newPositive);
  };
  const Value = [
    {
      text: "good",
      value: good,
    },
    {
      text: "bad",
      value: bad,
    },
    {
      text: "neutral",
      value: neutral,
    },
    {
      text: "all",
      value: all,
    },
    {
      text: "average",
      value: average,
    },
    {
      text: "positive",
      value: positive,
    },
  ];
  if (all === 0) {
    return (
      <div>
        <Header />
        <Button onClick={goodClick} text={"good"} />
        <Button onClick={neutralClick} text={"neutral"} />
        <Button onClick={badClick} text={"bad"} />
        <Content />
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <Button onClick={goodClick} text={"good"} />
      <Button onClick={neutralClick} text={"neutral"} />
      <Button onClick={badClick} text={"bad"} />
      <Content />
      <Statistics text={Value[0].text} value={Value[0].value} />
      <Statistics text={Value[1].text} value={Value[1].value} />
      <Statistics text={Value[2].text} value={Value[2].value} />
      <Statistics text={Value[3].text} value={Value[3].value} />
      <Statistics text={Value[4].text} value={Value[4].value} />
      <Statistics text={Value[5].text} value={Value[5].value} />
    </div>
  );
};
export default App;
