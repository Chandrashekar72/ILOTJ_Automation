import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()

type Env = 'qa' | 'dev'

const ENV = (process.env.TEST_ENV as Env) || 'qa'

const config = {
  qa: {
    baseUrl: 'https://appmod.ai/mode/Traffic%20Manager%20Mode',
    loginUrl: 'https://appmod.ai/login',
    storageState: 'storage/qa-auth.json',
  },
  dev: {
    baseUrl: 'https://dev.appmod.ai/mode/Traffic%20Manager%20Mode',
    loginUrl: 'https://dev.appmod.ai/login',
    storageState: 'storage/dev-auth.json',
  },
}

export const env = {
  ...config[ENV],
  headless: process.env.HEADLESS === 'true',
}

// Validation
if (!env.baseUrl) {
  throw new Error(`BASE_URL is missing for env: ${ENV}`)
}

// Warning (not failure)
if (!fs.existsSync(env.storageState)) {
  console.warn(`⚠️ Storage state not found for ${ENV}. Run auth setup.`)
}