import { useCallback } from 'react';
import logger, { LogLevel } from './logging';

export function useLogger(component: string) {
  const withContext = useCallback(
    (level: LogLevel, message: string, additionalContext?: Record<string, unknown>) => {
      const context = {
        component,
        ...additionalContext,
      };
      logger.log(level, message, context);
    },
    [component]
  );

  return {
    debug: (message: string, context?: Record<string, unknown>) => 
      withContext(LogLevel.DEBUG, message, context),
    info: (message: string, context?: Record<string, unknown>) => 
      withContext(LogLevel.INFO, message, context),
    warn: (message: string, context?: Record<string, unknown>) => 
      withContext(LogLevel.WARN, message, context),
    error: (message: string, context?: Record<string, unknown>) => 
      withContext(LogLevel.ERROR, message, context),
  };
}
