import { Given, When, Then } from "@cucumber/cucumber";
import { PageManager } from "../pages/pageManager";
import { RuleCreation } from "../pages/ruleCreationPage";
import { CustomWorld } from "../world/customWorld";
import testData from '../test-data/rules.json'






/**
 * Validate no variant is created
 */
Then('User enters Update description to 50min', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)
  await rulePage.sendMessage(testData.orderSeparationEdit.editminTime)

  await rulePage.verifySave()
})

Then('User enters on edit WTA', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)
  await rulePage.sendMessage(testData.orderSeparationEdit.editWTA)

  await rulePage.verifyseparation()
})

Then('User enters Cricket in chatbot', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)
  await rulePage.sendMessage(testData.orderSeparationEdit.editglobal)
  await rulePage.verifySave()
})

Then('User enters on edit WNTA', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)
    await rulePage.sendMessage(testData.orderSeparationEdit.editWNTA)
  await rulePage.verifyseparation()

})

Then('User enters SHORT in chatbot', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)
    await rulePage.sendMessage(testData.orderSeparationEdit.exemptionValue)
  await rulePage.verifySave()

})