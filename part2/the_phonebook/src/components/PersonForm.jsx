const Form = ({ newName, newNumber, handlePersonChange, handleNumberChange, addPerson }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input 
          value={newName}
          onChange={handlePersonChange}
        />
        <br/>
        number: <input 
          value={newNumber}
          onChange={handleNumberChange}
        />
      </div>
      <button type="submit">add</button>
    </form>
  )
}

export default Form