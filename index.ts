import { initTracerFromEnv, TextMapCodec } from 'jaeger-client'
import { getLogger } from '@blabu.com/logger'

const logger = getLogger(process.env.npm_package_name)

const config = {
  serviceName: process.env.npm_package_name,
  sampler: {
    type: 'const',
    param: 1
  }
}

const tracer = initTracerFromEnv(config, { logger })

let codec = new TextMapCodec({ urlEncoding: true })
tracer.registerInjector(tracer.FORMAT_HTTP_HEADERS, codec)
tracer.registerExtractor(tracer.FORMAT_HTTP_HEADERS, codec)

export default tracer
