import { setLoggerConfig, useLogger } from '@/main'

const { info, success, warn, error } = useLogger('MainSrc')
const { info: ofInfo } = useLogger('OtherFunc')

const someData = {
	attr1: 10,
	attr2: 'Hi',
}

info('info')
success('success')
warn('warn')
error('error')

setLoggerConfig({ showTimeStamp: false })
info('Test', someData)

setLoggerConfig({ showTimeStamp: true })
ofInfo('Test', someData)
