import { chromium } from '@playwright/test'
import path from 'path'
import { env } from '../config/env.config'   // 👈 IMPORTANT

(async () => {
  const browser = await chromium.launch({
    headless: env.headless,
  })

  const context = await browser.newContext()
  const page = await context.newPage()

  console.log(`🌍 Running auth for: ${process.env.TEST_ENV}`)

  // 👇 Use config, NOT process.env directly
  await page.goto(env.loginUrl)

  // wait for successful login redirect
  await page.waitForURL('**/mode/**', { timeout: 120000 })

  const storagePath = path.resolve(env.storageState) //path creation for storage state file;

  await context.storageState({ path: storagePath }) // line for storing the storage state in a file;

  console.log(`✅ Storage saved at ${storagePath}`)

  await browser.close()
})()