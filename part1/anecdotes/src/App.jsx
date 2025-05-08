import { useState } from "react";
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [most, setMost] = useState(0);
  const [mostSelected, setMostSelected] = useState(0);

  const anecdotesClick = () => {
    const randomInt = Math.floor(Math.random() * anecdotes.length);
    const newSelected = randomInt;
    setSelected(newSelected);
  };
  const votes = [0, 0, 0, 0, 0, 0, 0, 0];
  const [vote, setVote] = useState(votes);
  const voteClick = () => {
    const copy = [...vote];
    copy[selected] += 1;
    setVote(copy);
    let max = Math.max(...copy);
    console.log(max);
    let index = copy.indexOf(max);
    console.log(index);
    setMost(max);
    setMostSelected(index);
  };
  const DisplayMostVotes = () => {
    console.log(anecdotes[mostSelected]);
    return (
      <div>
        <p>{anecdotes[mostSelected]}</p>
        <p>has {most} votes</p>
      </div>
    );
  };
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p> has {vote[selected]} votes</p>
      <Button onClick={voteClick} text="vote" />
      <Button onClick={anecdotesClick} text="anecdotes" />
      <h1>Anecdote with most votes</h1>
      <DisplayMostVotes />
    </div>
  );
};
export default App;
