import { useEffect, useState } from "react";

const BlurCircle = () => {
  const [position, setPosition] = useState({ top: 100, left: 100 });

  useEffect(() => {
    const moveCircle = () => {
      const circleSize = 200; // Approx. diameter in px (since you use blur & aspect-square)
      const padding = 50; // Keep circle visible inside viewport
      const maxX = window.innerWidth - circleSize - padding;
      const maxY = window.innerHeight - circleSize - padding;
      const newTop = Math.random() * maxY + padding;
      const newLeft = Math.random() * maxX + padding;
      setPosition({ top: newTop, left: newLeft });
    };

    moveCircle();
    const interval = setInterval(moveCircle, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute -z-50 aspect-square rounded-full bg-primary/30 blur-3xl transition-all duration-1000 ease-in-out"
      style={{
        top: position.top,
        left: position.left,
        width: "200px",
        height: "200px",
      }}
    />
  );
};

export default BlurCircle;
