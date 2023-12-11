import React from 'react';

const Display = ({ toolOutput }) => {
  return (
    <div>
      <h2>Scan Results</h2>
      <pre>{toolOutput.join('\n')}</pre>
    </div>
  );
};

export default Display;
