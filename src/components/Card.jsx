import React from 'react'

export default function Card({ children }) {
  return (
    <div style={
        {
          padding: '8px',
          borderRadius: '8px',
          border: '1px solid black',
          display: 'inline-block'
        }
      } 
      className="card">
      {children}
    </div>
  );
}