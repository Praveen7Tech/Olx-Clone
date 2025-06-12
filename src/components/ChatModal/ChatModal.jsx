import { useState } from 'react';
import './ChatModal.css';

const ChatModal = ({ setShowChat }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleClose = () => {
    setShowChat(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.trim() === '') {
      setError('Message cannot be empty.');
      return;
    }

    console.log("Message sent:", message);

    setError('');
    setMessage('');

    setShowChat(false);
  };

  return (
    <div className="chat-modal-overlay">
      <div className="chat-modal">
        <div className="chat-header">
          <h3>Chat with Seller</h3>
          <button onClick={handleClose}>❌</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="chat-body">
            <p>Send a message here...</p>
            <textarea
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
          </div>
          <div className="chat-footer">
            <button type="submit" className="send-btn">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatModal;
