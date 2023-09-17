import { useState } from 'react';
import LoginForm from './components/LoginForm';
import LoginModal from './components/Modal';
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOk = () => {
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
    setShowModal(true);
  };

  return (
    <div className='bg-[#2148C0] min-h-screen'>
      <LoginForm onLogin={handleLogin} />
      <LoginModal
        handleOk={handleOk}
        isModalOpen={showModal}
        handleCancel={handleCancel}
        message={isLoggedIn ? `Login successful! Welcome back, luxpmsoft` : 'Login failed. Incorrect username or password'}
      />
    </div>
  );
}

export default App;
