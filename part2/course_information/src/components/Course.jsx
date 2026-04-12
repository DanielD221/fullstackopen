const Course = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      <div>
        {course.parts.map(part => (
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        ))}
      </div>
      <p><b>total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b></p>
    </div>
  )
}

export default Course