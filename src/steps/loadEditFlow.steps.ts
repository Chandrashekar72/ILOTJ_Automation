import { When, Then } from '@cucumber/cucumber'
import { CustomWorld } from '../world/customWorld'
import { RuleCreation } from '../pages/ruleCreationPage'

/**
 * Send chatbot message for duplicate resolution
 */
When('User enters on View or edit the existing learning', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.sendMessage('View or edit the existing learning')
})

/**
 * Validate no variant is created
 */
Then('user verify the new varaint is discarded', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.verifyVariantDiscarded()
})