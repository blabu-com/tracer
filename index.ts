import { initTracerFromEnv } from 'jaeger-client'
import { getLogger } from '@blabu.com/logger'

const logger = getLogger(process.env.npm_package_name)

const config = {
  serviceName: process.env.npm_package_name,
  sampler: {
    type: 'const',
    param: 1
  }
}

export default initTracerFromEnv(config, { logger })
