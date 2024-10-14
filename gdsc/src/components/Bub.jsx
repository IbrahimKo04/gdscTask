import React from "react";

// Function to generate random size and position for the bubbles
const generateBubbles = (numBubbles) => {
  const bubbles = [];
  for (let i = 1; i <= numBubbles; i++) {
    const size = Math.random() * 30 + 5; // Random size between 5px and 35px
    const delay = -i * 0.2; // Animation delay
    const posX = Math.random() * 1000; // Random X position
    const posY = Math.random() * 1000; // Random Y position
    const posZ = Math.random() * 2000; // Random Z position
    const hue = Math.random() * 360; // Random color

    bubbles.push(
      <div
        key={i}
        className="bubble"
        style={{
          height: `${size}px`,
          width: `${size}px`,
          animationDelay: `${delay}s`,
          transform: `translate3d(${posX}px, ${posY}px, ${posZ}px)`,
          background: `hsl(${hue}, 70%, 50%)`,
        }}
      />
    );
  }
  return bubbles;
};

const Bub = () => {
  return (
    <>
      <style>
        {`
          
          body {
            background: none;
            min-height: 100%;
            overflow: hidden;
          }

          @keyframes move {
            100% {
              transform: translate3d(0, 0, -1000px);
            }
          }
          .container {
            position: relative;
            width: 100%;
            min-height: 100%;
            transform-style: preserve-3d;
          }
          .bubble-wrap {
            margin: 0 auto;
            width: 500px;
            height: 500px;
            transform-style: preserve-3d;
            transform-origin: center center;
            perspective: 600px;
          }
          .bubble {
            position: absolute;
            background: black;
            opacity: .7;
            border-radius: 50%;
            animation: move 3s infinite;
          }
        `}
      </style>

      <div className="container">
        <div className="bubble-wrap translate-x-96">
          {generateBubbles(100)} 
        </div>
      </div>
    </>
  );
};

export default Bub;
