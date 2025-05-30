import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <div>
      <Header header={course} />
      <Content contents={course.parts} />
      <Total total={course.parts} />
    </div>
  );
};
export default Course;
