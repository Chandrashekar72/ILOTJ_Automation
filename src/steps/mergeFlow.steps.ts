import { When, Then } from '@cucumber/cucumber'
import { CustomWorld } from '../world/customWorld'
import { RuleCreation } from '../pages/ruleCreationPage'
import testData from '../test-data/rules.json'

/**
 * Apply to Verizon (from JSON)
 */
When('User enters Apply to Verizon in chatbot', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.sendMessage(testData.orderSeparationMerge.global)
  await rulePage.verifyWnta()
})

/**
 * Enter LINER (from JSON)
 */
When('User enters LINER in chatbot', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.sendMessage(testData.orderSeparationMerge.exemptionValue)
})

/**
 * Click Compare button
 */
When('User clicks on Compare button', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.clickCompare()
  await rulePage.verifyTier()
})

/**
 * Send merge intent via chatbot
 */
When('User enters Merge the rule in chatbot', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.sendMessage(testData.orderSeparationMerge.mergeIntent)
})

/**
 * Confirm merge via chatbot
 */
When('User confirms merge in chatbot', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.verifyMergeOptionVisible()
  await rulePage.sendMessage(testData.orderSeparationMerge.mergeConfirm)
})

/**
 * Final RHS validation (reuse your existing validation)
 */
Then('user should see Verizon in WTA', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)

  const rule = testData.orderSeparationMerge

  await rulePage.verifyFinalFields(rule.expected)
})