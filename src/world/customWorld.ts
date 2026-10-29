// src/world/customWorld.ts
import { setWorldConstructor, World } from '@cucumber/cucumber'
import { BrowserContext, Page } from '@playwright/test'
import { PageManager } from '../pages/pageManager'

export class CustomWorld extends World {
  context!: BrowserContext
  page!: Page
  pageManager!: PageManager
}

setWorldConstructor(CustomWorld)