import type { LoggerConfig } from './types'


/** Singleton object acting as project-level configuration */
export const LoggerConfigObject: LoggerConfig = {
	showTimeStamp: true,
}


/**
 * Global configuration method of all loggers within project.
 * @param config - set optional configuration
 */
export const setLoggerConfig = (config: Partial<LoggerConfig>) => {
	for (const attr of Object.getOwnPropertyNames(config)) {
		LoggerConfigObject[attr] = config[attr]
	}
}
