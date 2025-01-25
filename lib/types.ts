//
// Helper types
//



/**
 * Exported type alias for all console.log methods
 */
// eslint-disable-next-line no-unused-vars
export type LoggerFunction = (...args: any[]) => void


/**
 * Exported alias for logger configuration
 */
export type LoggerConfig = {
	showTimeStamp: boolean
}
