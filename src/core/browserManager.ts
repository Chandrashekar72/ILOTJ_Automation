// src/core/browserManager.ts
import { chromium, Browser } from '@playwright/test'
import { env } from '../config/env.config'
import { logger } from './logger'

let browser: Browser | undefined

export async function launchBrowser(): Promise<Browser> {
  if (!browser) {
    logger.info('Launching browser...')
    browser = await chromium.launch({ headless: env.headless })
  }
  return browser
}

export async function closeBrowser(): Promise<void> {
  if (browser) {
    logger.info('Closing browser...')
    await browser.close()
    browser = undefined
  }
}