import React from 'react';

const Sessions = () => {
  // Retrieve sessions from local storage
  const sessions = JSON.parse(localStorage.getItem('sessions')) || [];

  return (
  <div>
        {sessions.length === 0 ? (
          
            <p>No sessions posted yet.</p>
     
        ) : (
          sessions.map((session, index) => (
            <div key={index}>
              <h2 style={{ fontSize: '2em', margin: '20px 0' }}>{session.topic}</h2>
          
              <div style={{ width: '33.33%', padding: '0 15px', marginBottom: '20px' }}>
                <div style={{ border: '1px solid #e3e3e3', borderRadius: '5px' }}>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '1.5em', marginBottom: '10px' }}>{session.topic}</h3>
                    <h4 style={{ fontSize: '1em', color: '#6c757d', marginBottom: '20px' }}>
                      {session.date} at {session.time}
                    </h4>
                    <p style={{ fontSize: '1em' }}>
                      Posted by: {session.alumniName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          
          
          ))
        )}
      </div>

  );
};

export default Sessions;
