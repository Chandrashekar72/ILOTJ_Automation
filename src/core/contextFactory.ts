// src/core/contextFactory.ts
import { Browser } from '@playwright/test'
import { env } from '../config/env.config'

export async function createContext(browser: Browser) {
  return await browser.newContext({
    storageState: env.storageState,
    viewport: { width: 1280, height: 720 }
  })
}