import { Then } from '@cucumber/cucumber'
import { CustomWorld } from '../world/customWorld'
import { RuleCreation } from '../pages/ruleCreationPage'

Then('User should see New Variant label', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.verifyNewVariantLabel()
})