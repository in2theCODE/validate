import styles from './logging.module.css';

const logger = {
  info: (message: string) => {
    console.log(`[INFO] ${message}`);
  },
  warn: (message: string) => {
    console.warn(`[WARN] ${message}`);
  },
  error: (message: string) => {
    console.error(`[ERROR] ${message}`);
  }
};

export default logger;
