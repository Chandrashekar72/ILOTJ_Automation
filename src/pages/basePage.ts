import { Page, Locator, expect } from '@playwright/test'
import { frameworkConfig } from '../config/framework.config'

export class BasePage {
  protected page: Page

  constructor(page: Page) {
    this.page = page

    // Apply Playwright timeouts
    this.page.setDefaultTimeout(frameworkConfig.defaultTimeout)
    this.page.setDefaultNavigationTimeout(frameworkConfig.navigationTimeout)
  }

  protected async click(locator: Locator) {
    await expect(locator).toBeVisible({
      timeout: frameworkConfig.defaultTimeout
    })
    await locator.click()
  }

  protected async toContainText(locator: Locator, text: string) {
  await expect(locator).toContainText(text, {
    timeout: frameworkConfig.defaultTimeout
  })
}

protected async toHaveValue(locator: Locator, value: string) {
  await expect(locator).toHaveValue(value, {
    timeout: frameworkConfig.defaultTimeout
  })
}

protected async toBeChecked(locator: Locator) {
  await expect(locator).toBeChecked({
    timeout: frameworkConfig.defaultTimeout
  })
}

  protected async fill(locator: Locator, text: string) {
    await expect(locator).toBeVisible({
      timeout: frameworkConfig.defaultTimeout
    })
    await locator.fill(text)
  }

  protected async isVisible(locator: Locator) {
    await expect(locator).toBeVisible({
      timeout: frameworkConfig.defaultTimeout
    })
  }

  protected async notToBeVisible(locator: Locator) {
    await expect(locator).not.toBeVisible({
      timeout: frameworkConfig.defaultTimeout
    })
  }

  protected async navigate(url: string, waitForLocator?: Locator) {
    await this.page.goto(url, {
      waitUntil: 'load',
      timeout: frameworkConfig.navigationTimeout
    })

    // Wait for network to settle (important for SPA apps)
    await this.page.waitForLoadState('networkidle')

    

    // Optional: wait for a specific element if provided (BEST PRACTICE)
    if (waitForLocator) {
      await expect(waitForLocator).toBeVisible({
        timeout: frameworkConfig.defaultTimeout
      })
    }
  }
}