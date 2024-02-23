import winston, { createLogger, format, transports, addColors } from 'winston';

// Destructuring the necessary functions from the format
const { combine, colorize, label, timestamp, printf } = format;

interface LogInfo {
    level: string;
    message: string;
    label?: string;
    timestamp?: string;
}


// Custom colors for different log levels
export const LOGGER_MSG_COLORS = {
    error: "bold red",
    warn: "italic yellow",
    info: "italic cyan",
};

// Adding custom colors to Winston
addColors(LOGGER_MSG_COLORS);

const customFormat = combine(
    colorize({ all: true }),
    timestamp({ format: 'YY-MM-DD HH:MM:SS' }),
    printf((info: LogInfo) => {
        return `[${info.timestamp}]: ${info.message}`;
    })
);

const logger = createLogger({
    level: 'info',
    transports: [
        new transports.Console({ format: customFormat }),
    ],
});


class Loggers {
    info(lable: string, msg: unknown) {
        logger.info(`[${lable}]: ${msg}`)
    }

    error(lable: string, msg: unknown) {
        logger.error(`[${lable}]: ${msg}`)
    }
    warn(lable: string, msg: unknown) {
        logger.warn(`[${lable}]: ${msg}`)
    }
}


export default new Loggers();
