import logger from './logging';

describe('Logger', () => {
  it('should log an info message', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    logger.ginfo('Test message');
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Test message'));
    consoleSpy.mockRestore();
  });
});
