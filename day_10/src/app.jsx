import React from 'react';
import Counter from './counter';
import ImageSlider, { AutoImageSlider } from './imageslider';

export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        background: '#f1f1f1',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <ImageSlider />
      <AutoImageSlider />
      <Counter />
    </div>
  );
}
