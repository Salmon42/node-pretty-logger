import { setLoggerConfig, useLogger } from '@/main'

const { info, success, warn, error } = useLogger('MainSrc')
const { info: ofInfo } = useLogger('OtherFunc')

info('info')
success('success')
warn('warn')
error('error')

setLoggerConfig({ showTimeStamp: false })
info('Test')

setLoggerConfig({ showTimeStamp: true })
ofInfo('Test')
