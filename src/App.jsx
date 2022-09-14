
import React from 'react';
import Feedback from './components/Feedback/Feedback';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '50px',
        color: '#010101',
      }}>
      <Feedback />
    </div>
  );
}

export default App;
