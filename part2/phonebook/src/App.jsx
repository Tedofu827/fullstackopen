import { useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchName, setSearchName] = useState("");

  const checkName = (event) => {
    event.preventDefault();
    return persons.some((person) => person.name === newName)
      ? showNameAlert()
      : addPerson();
  };
  const showNameAlert = () => {
    alert(`${newName} is already added to phonebook`);
    setNewName("");
  };
  const showSearchName = persons.filter((person) => {
    return person.name.toLowerCase().includes(searchName.toLowerCase());
  });
  const addPerson = () => {
    const personObject = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1,
    };
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewPhone("");
  };
  const changeSearchName = (event) => {
    setSearchName(event.target.value);
  };
  const changeName = (event) => {
    setNewName(event.target.value);
  };
  const changePhone = (event) => {
    setNewPhone(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} changeSearchName={changeSearchName} />
      <h2>Add a new contact</h2>
      <PersonForm
        checkName={checkName}
        newName={newName}
        changeName={changeName}
        newPhone={newPhone}
        changePhone={changePhone}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        searchName={searchName}
        showSearchName={showSearchName}
      />
    </div>
  );
};

export default App;
