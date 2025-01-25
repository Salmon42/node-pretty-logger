//
// Logger utilities
//

import { LoggerConfigObject } from './config'
import { C, N } from './constants'


/**
 * @category Internals
 * @returns stringified timestamp in format HH:MM:SS.fff
 */
export const getLogTimestamp = () => {
	const d = new Date()
	return `${d.toTimeString().split(' ')[0]}.${d.getMilliseconds().toString()}`
}


/**
 * Return constructed string containing tag, severity indicator and timestamp depending on configuration
 * @category Internals
 *
 * @param severityColor - constant string of escape character indicating terminal text color change
 * @param tag - the semi-unique label
 * @returns string used in logger function
 */
export const logTemplate = (severityColor: string, tag: string) => {
	return LoggerConfigObject.showTimeStamp
		? `[${getLogTimestamp()}] ${C}<${tag}>${N} ${severityColor}(I)${N}`
		: `${C}<${tag}>${N} ${severityColor}(I)${N}`
}
