//
// ...
//

import { LoggerConfigObject } from './config'
import { C, N } from './constants'


/**
 * Returns
 *
 * @returns
 */
export const getLogTimestamp = () => {
	const d = new Date()
	return `${d.toTimeString().split(' ')[0]}.${d.getMilliseconds().toString()}`
}


/**
 * ...
 *
 * @param severityColor - ...
 * @param tag - ...
 * @returns ...
 */
export const logTemplate = (severityColor: string, tag: string) => {
	return LoggerConfigObject.showTimeStamp
		? `[${getLogTimestamp()}] ${C}<${tag}>${N} ${severityColor}(I)${N}`
		: `${C}<${tag}>${N} ${severityColor}(I)${N}`
}
