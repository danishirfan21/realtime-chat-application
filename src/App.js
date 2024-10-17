import './App.css';

function App() {
  return (
    <div class="chat-container">
      <aside class="chat-sidebar">
        <header class="sidebar-header">
          <h2>Chat Rooms</h2>
          <button id="add-room" title="Add Room">
            <i class="fas fa-plus"></i>
          </button>
        </header>
        <ul id="room-list">{/* <!-- Dynamic room list --> */}</ul>
      </aside>
      <main class="chat-main">
        <header class="chat-header">
          <h2 id="room-name">General</h2>
          <div class="user-settings">
            <button id="settings-btn" title="Settings">
              <i class="fas fa-cog"></i>
            </button>
            <button id="logout-btn" title="Logout">
              <i class="fas fa-sign-out-alt"></i>
            </button>
          </div>
        </header>
        <div class="chat-messages" id="chat-messages">
          {/* <!-- Messages will appear here --> */}
        </div>
        <form id="chat-form" class="chat-form">
          <input
            id="msg"
            type="text"
            placeholder="Type a message..."
            required
            autocomplete="off"
          />
          <button type="submit" class="btn">
            <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
