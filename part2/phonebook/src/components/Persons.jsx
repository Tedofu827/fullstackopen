const Persons = ({ persons, searchName, showSearchName }) => {
  if (searchName === "") {
    return persons.map((person) => (
      <div key={person.id}>
        {person.name}
        {": "} {person.phone}{" "}
      </div>
    ));
  } else {
    return showSearchName.map((person) => (
      <div key={person.id}>
        {person.name}
        {": "}
        {person.phone}{" "}
      </div>
    ));
  }
};
export default Persons;
