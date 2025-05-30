const Content = ({ contents }) => {
  return (
    <div>
      {contents.map((content) => (
        <p key={content.id}>
          {content.name} : {content.exercises}
        </p>
      ))}
    </div>
  );
};
export default Content;
