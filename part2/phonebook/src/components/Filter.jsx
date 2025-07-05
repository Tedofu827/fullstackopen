const Filter = ({ searchName, changeSearchName }) => {
  return (
    <div>
      filter shown with <input value={searchName} onChange={changeSearchName} />
    </div>
  );
};
export default Filter;
