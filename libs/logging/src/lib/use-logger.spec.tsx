import { renderHook } from '@testing-library/react';
import { useLogger } from './use-logger';
import logger from './logging';

jest.mock('./logging', () => ({
  __esModule: true,
  default: {
    log: jest.fn(),
  },
  LogLevel: {
    DEBUG: 'DEBUG',
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR',
  },
}));

describe('useLogger', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should log messages with component context', () => {
    const { result } = renderHook(() => useLogger('TestComponent'));
    
    result.current.info('Test message');
    
    expect(logger.log).toHaveBeenCalledWith(
      'INFO',
      'Test message',
      expect.objectContaining({
        component: 'TestComponent'
      })
    );
  });

  it('should merge additional context with component context', () => {
    const { result } = renderHook(() => useLogger('TestComponent'));
    const additionalContext = { userId: '123' };
    
    result.current.error('Error message', additionalContext);
    
    expect(logger.log).toHaveBeenCalledWith(
      'ERROR',
      'Error message',
      expect.objectContaining({
        component: 'TestComponent',
        userId: '123'
      })
    );
  });
});
