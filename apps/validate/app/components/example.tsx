'use client';

import { useLogger } from '@validate/logging';

export function ExampleComponent() {
  const logger = useLogger('ExampleComponent');

  const handleClick = () => {
    logger.info('Button clicked', { timestamp: new Date().toISOString() });
  };

  return (
    <button 
      onClick={handleClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Test Logging
    </button>
  );
}
