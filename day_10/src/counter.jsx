import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: 20 }}>
      <h2 style={{ margin: 0, fontSize: 30 }}>Counter</h2>
      <div style={{ fontSize: 48, fontWeight: 'bold', margin: '12px 0' }}>{count}</div>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        style={{
          padding: '10px 20px',
          fontSize: 16,
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          background: '#111',
          color: '#fff',
        }}
      >
        Increment
      </button>
    </div>
  );
}
