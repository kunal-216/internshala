// Answer to the first step
// Home Route ("/"):
// Method: GET
// Description: Serves the homepage of the application.

// Signup Route ("/signup"):
// Method: POST
// Description: Handles user registration. Accepts user data and creates a new user in the database.

// Signin Route ("/signin"):
// Method: POST
// Description: Authenticates user login. Verifies credentials and returns a session token.

// Profile Route ("/profile/"):
// Method: GET
// Description: Fetches user profile information based on user ID.

// Logout Route ("/logout"):
// Method: POST
// Description: Logs the user out and destroys the session.

import { useState } from 'react';
import './App.css';

function App() {
  const [darkmode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkmode)
  }
  return (
    <div className={darkmode ? 'dark-mode': 'light-mode'} id='container'>
      <button className="toggle-btn" onClick={toggleDarkMode}>{darkmode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button>
      <h1>This is a text to check the working of toggle button</h1>
    </div>
  );
}

export default App;
