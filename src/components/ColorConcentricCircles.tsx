import React, { useRef, useEffect, useState } from 'react';
import { generateColors } from '../utils/generateColors';
import { drawConcentricCircles } from '../utils/drawHelpers';

const ColorConcentricCircles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colors = React.useMemo(generateColors, []);

  // Set canvas size based on window width, with a maximum of 1000px
  const [canvasSize, setCanvasSize] = useState<number>(Math.min(window.innerWidth * 0.8, 1000));

  useEffect(() => {
    const handleResize = () => {
      // Recalculate canvas size on window resize, keeping it at 80% of the screen width, max 1000px
      setCanvasSize(Math.min(window.innerWidth * 0.8, 1000));
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions based on the calculated canvasSize
    canvas.width = canvasSize;
    canvas.height = canvasSize;

    // Clear the canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Adjust ringSpacing based on the canvas size to maintain density
    const ringSpacing = canvasSize / 200;

    // Draw colors in concentric circles
    drawConcentricCircles(ctx, colors, canvas.width / 2, canvas.height / 2, ringSpacing);
  }, [colors, canvasSize]);

  return (
    <div className="flex justify-center items-center">
      <canvas ref={canvasRef} className="border shadow-md" />
    </div>
  );
};

export default ColorConcentricCircles;