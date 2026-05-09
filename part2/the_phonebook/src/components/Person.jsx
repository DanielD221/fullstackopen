const Person = ({ person, handleDelete }) => {
  const confirmDelete = () => {
    if (window.confirm(`Delete ${person.name}?`)) {
      handleDelete(person.id)
    }
  }

  return (
    <>
      <p>
        {person.name} {person.number}
        <button onClick={confirmDelete}>delete</button>
      </p>
    </>
  )
}

export default Person