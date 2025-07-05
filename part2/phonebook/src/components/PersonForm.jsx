const PersonForm = ({
  checkName,
  newName,
  changeName,
  newPhone,
  changePhone,
}) => {
  return (
    <form onSubmit={checkName}>
      <div>
        name: <input value={newName} onChange={changeName} />
      </div>
      <div>
        number: <input value={newPhone} onChange={changePhone} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
