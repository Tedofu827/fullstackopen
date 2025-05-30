const Total = ({ total }) => {
  return (
    <div>
      <h4>
        Total of {total.reduce((sum, part) => sum + part.exercises, 0)}{" "}
        exercises
      </h4>
    </div>
  );
};
export default Total;
