//
// Terminal logger implementation
//

import { R, G, B, Y } from './constants'
import { LoggerFunction } from './types'
import { logTemplate } from './utils'


/**
 * https://davidlozzi.com/2021/03/16/style-up-your-console-logs/
 *
 * @param tag - Label for the logs
 * @returns colored & styled command prompt / terminal logs
 */
export const useLogger = (tag: string) => {
	const info: LoggerFunction = (...args) => console.info(logTemplate(B, tag), ...args)
	const success: LoggerFunction = (...args) => console.info(logTemplate(G, tag), ...args)
	const warn: LoggerFunction = (...args) => console.warn(logTemplate(Y, tag), ...args)
	const error: LoggerFunction = (...args) => console.error(logTemplate(R, tag), ...args)

	return {
		info,
		success,
		warn,
		error,
	}
}
