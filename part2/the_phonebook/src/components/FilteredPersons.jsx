import Person from './Person'

const FilteredPersons = ({ persons, filter, handleDelete }) => {
    const filteredPersons = persons.filter(person => 
        person.name.toLowerCase().includes(filter.toLowerCase())
    )
    return (
      <div>
        {filteredPersons.map(person => <Person key={person.id} person={person} handleDelete={handleDelete} />)}
      </div>
    )
  }

export default FilteredPersons