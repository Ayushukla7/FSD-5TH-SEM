import React, { useEffect, useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  const prevImage = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ marginBottom: 16, fontSize: 32 }}>Image Rotator</h2>

      <img
        src={images[index]}
        alt="slide"
        style={{
          width: 320,
          height: 220,
          objectFit: 'cover',
          borderRadius: 8,
          display: 'block',
          margin: '0 auto',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}
      />

      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 18 }}>
        <button onClick={prevImage} style={buttonStyle}>
          Left
        </button>
        <button onClick={nextImage} style={buttonStyle}>
          Right
        </button>
      </div>
    </div>
  );
}

export function AutoImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ marginBottom: 16, fontSize: 32 }}>Auto Image Slider</h2>
      <img
        src={images[index]}
        alt="Automatically changing landscape"
        style={{
          width: 320,
          height: 220,
          objectFit: 'cover',
          borderRadius: 8,
          display: 'block',
          margin: '0 auto',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}
      />
    </div>
  );
}

const buttonStyle = {
  padding: '8px 18px',
  border: '1px solid #ccc',
  background: '#fff',
  borderRadius: 6,
  cursor: 'pointer',
  fontSize: 16,
};
