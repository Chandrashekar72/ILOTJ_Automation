// src/hooks/hooks.ts
import {
  Before,
  After,
  BeforeAll,
  AfterAll,
  setDefaultTimeout,
  ITestCaseHookParameter
} from '@cucumber/cucumber'
import { CustomWorld } from '../world/customWorld'
import { launchBrowser, closeBrowser } from '../core/browserManager'
import { createContext } from '../core/contextFactory'
import { PageManager } from '../pages/pageManager'
import { env } from '../config/env.config'
import { logger } from '../core/logger'

setDefaultTimeout(90 * 1000)

let browser: any

BeforeAll(async () => {
  browser = await launchBrowser()
})

Before(async function (this: CustomWorld) {
  try {
    this.context = await createContext(browser)

    await this.context.tracing.start({
      screenshots: true,
      snapshots: true
    })

    this.page = await this.context.newPage()

    await this.page.goto(env.baseUrl, {
      waitUntil: 'domcontentloaded'
    })

    this.pageManager = new PageManager(this.page)

    logger.info('Scenario setup complete')
  } catch (error) {
    logger.error('Error in Before hook')
    throw error
  }
})

After(async function (this: CustomWorld, scenario: ITestCaseHookParameter) {
  try {
    // 📸 Take screenshot ONLY if page is alive
    if (scenario.result?.status === 'FAILED') {
      if (this.page && !this.page.isClosed()) {
        const screenshot = await this.page.screenshot({ fullPage: true })
        await this.attach(screenshot, 'image/png')
      } else {
        logger.warn('Skipping screenshot: page already closed')
      }
    }

    // 🧠 Stop tracing safely
    if (this.context) {
      try {
        await this.context.tracing.stop({
          path: `reports/trace-${Date.now()}.zip`
        })
      } catch (err) {
        logger.warn('Tracing stop failed (context may be closed)')
      }
    }

  } catch (error) {
    logger.error('Error inside After hook (non-blocking)', error)
  } finally {
    // 🔒 Safe cleanup

    try {
      if (this.page && !this.page.isClosed()) {
        await this.page.close()
      }
    } catch (err) {
      logger.warn('Page close failed')
    }

    try {
      if (this.context) {
        await this.context.close()
      }
    } catch (err) {
      logger.warn('Context close failed')
    }
  }
})

AfterAll(async () => {
  await closeBrowser()
})