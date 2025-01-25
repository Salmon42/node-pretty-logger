import type { LoggerConfig } from './types'


export const LoggerConfigObject: LoggerConfig = {
	showTimeStamp: true,
}

export const setLoggerConfig = (config: Partial<LoggerConfig>) => {
	for (const attr of Object.getOwnPropertyNames(config)) {
		LoggerConfigObject[attr] = config[attr]
	}
}
