// src/pages/pageManager.ts
import { Page } from '@playwright/test'

export class PageManager {
  private page: Page
  private pages = new Map<Function, any>()

  constructor(page: Page) {
    this.page = page
  }

  getPage<T>(PageClass: new (page: Page) => T): T {
    if (!this.pages.has(PageClass)) {
      this.pages.set(PageClass, new PageClass(this.page))
    }
    return this.pages.get(PageClass)
  }
}