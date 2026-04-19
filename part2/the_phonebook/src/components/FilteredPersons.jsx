import Person from './Person'

const FilteredPersons = ({ persons, filter }) => {
    const filteredPersons = persons.filter(person => 
        person.name.toLowerCase().includes(filter.toLowerCase())
    )
    return (
      <div>
        {filteredPersons.map(person => <Person key={person.id} person={person} />)}
      </div>
    )
  }

export default FilteredPersons