//
// Helper types
//


/**
 * Exported type alias for all console.log methods
 * @category Internals
 */
// eslint-disable-next-line no-unused-vars
export type LoggerFunction = (...args: any[]) => void


/**
 * Exported alias for logger configuration
 * @category Internals
 */
export type LoggerConfig = {
	showTimeStamp: boolean
}
