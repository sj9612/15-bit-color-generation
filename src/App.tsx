import React from 'react';
import ColorConcentricCircles from './components/ColorConcentricCircles';

const App: React.FC = () => {
  return (
    <div role='main' className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">
        Concentric Circles
      </h1>
      <ColorConcentricCircles />
    </div>
  );
};

export default App;

