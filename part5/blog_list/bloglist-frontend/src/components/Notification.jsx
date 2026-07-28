const Notification = ({ notification }) => {
  if (notification === null) {
    return null
  } else {
    return (
      <div className={`notification ${notification.type}`}>
        {notification.message}
      </div>
    )
  }
}

export default Notification