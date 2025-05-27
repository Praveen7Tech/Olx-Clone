import './ChatModal.css'

const ChatModal = ({ setShowChat }) => {
  const handleClose = () => {
    setShowChat(false)
  }

  return (
    <div className="chat-modal-overlay">
      <div className="chat-modal">
        <div className="chat-header">
          <h3>Chat with Seller</h3>
          <button onClick={handleClose} className="close-btn">&times;</button>
        </div>
        <form action="">
        <div className="chat-body">
          <p>Start your conversation here...</p>
          <textarea placeholder="Type your message..." />
        </div>
        <div className="chat-footer">
          <button type='submit' className="send-btn">Send</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default ChatModal
