import { When,Then } from '@cucumber/cucumber'
import { CustomWorld } from '../world/customWorld'
import { RuleCreation } from '../pages/ruleCreationPage'
import { LearningManagementPage } from '../pages/learningManagementPage'
import testData from '../test-data/rules.json'

When('User enters separation rule in chatbot', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.sendMessage(testData.orderSeparation.Rule)
  await rulePage.verifyTier()
})

When('User enters Order Separation in chatbot',async function (this:CustomWorld) {
      const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.sendMessage(testData.orderSeparation.ruleType)
  await rulePage.verifyseparation()
    
})



When('User enters I want to add Learning Description',async function (this:CustomWorld) {
      const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.sendMessage(testData.restrictPlacement.Rule)
  await rulePage.verifyseparation()
    
})

When('User enters Restrict placement rule in chatbot', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.sendMessage(testData.restrictPlacement.ruleType)
  await rulePage.verifyTier()
})

When("User enters Tier 1 in chatbot",async function(this:CustomWorld){
    const rulePage = this.pageManager.getPage(RuleCreation)
  
    await rulePage.verifyTier()

  await rulePage.sendMessage(testData.orderSeparation.tierRule)
})



When('User enters Tier 1 Spot placement rule in chatbot',async function (this:CustomWorld) {
      const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.sendMessage(testData.spotPlacement.Rule)
  await rulePage.verifyTier()
    
})

When('User enters Inventory Matching rule in chatbot', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.sendMessage(testData.inventorycodeMatching.Rule)
  await rulePage.verifyTier()
})

When('User enters Breakcode Matching rule in chatbot', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.sendMessage(testData.breakcodeMatching.Rule)
  await rulePage.verifyTier()
})

When('User enters Enable in chatbot', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.sendMessage(testData.inventorycodeMatching.Enable)
  await rulePage.verifyTier()
})

When('User enters Advertiser Separation in chatbot', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)
  await rulePage.sendMessage(testData.advertiserSeparation.ruleType)
  await rulePage.verifyseparation()
})

When('User enters Advertiser Pair Placement Restriction in chatbot', async function (this: CustomWorld) {
  const rulePage = this.pageManager.getPage(RuleCreation)
  await rulePage.sendMessage(testData.advertiserPairPlacementRestriction.ruleType)
  await rulePage.verifyTier()
})

When('User enters 30min in chatbot',async function (this:CustomWorld) {
      const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.sendMessage(testData.orderSeparation.minTime)
  await rulePage.verifyWta()
    
})

When('User enters 5min in chatbot',async function (this:CustomWorld) {
      const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.sendMessage(testData.orderSeparationVariant.minTime)
  await rulePage.verifyWta()
    
})



When('User enters Apply to Audacy and Kroger in chatbot',async function (this:CustomWorld) {
      const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.sendMessage(testData.advertiserPairPlacementRestriction.global)
  await rulePage.verifyWnta()
    
})


When('User enters Apply Globally in chatbot',async function (this:CustomWorld) {
      const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.sendMessage(testData.orderSeparation.global)
  await rulePage.verifyWnta()
    
})





When('User enters Apply to Audacy in chatbot',async function (this:CustomWorld) {
      const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.sendMessage(testData.restrictPlacement.global)
  await rulePage.verifyWnta()
    
})


When('User enters Yes, add exemption in chatbot',async function (this:CustomWorld) {
      const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.sendMessage(testData.orderSeparation.exemptionYes)
  await rulePage.verifyWntaExemption()
    
})



When('User enters CM in chatbot',async function (this:CustomWorld) {
      const rulePage = this.pageManager.getPage(RuleCreation)

  await rulePage.sendMessage(testData.orderSeparation.exemptionValue)
    
})




// Then('User clicks on Save Button for {string} rule', async function (this: CustomWorld, ruleType: string) {

//   const rulePage = this.pageManager.getPage(RuleCreation)
//   const learningPage = this.pageManager.getPage(LearningManagementPage)

//   // ✅ FIXED LINE (no TS error)
//   const rule = (testData as Record<string, any>)[ruleType]

//   if (!rule) {
//     throw new Error(`Rule type not found: ${ruleType}`)
//   }

//   // ✅ RHS validation
//   await rulePage.verifyFinalFields(rule.expected)

//   // ✅ Save
//   await rulePage.saveLearning(learningPage)
// })

Then('User verifies RHS for {string} rule', async function (this: CustomWorld, ruleType: string) {

  const rulePage = this.pageManager.getPage(RuleCreation)

  const rule = (testData as Record<string, any>)[ruleType]

  if (!rule) {
    throw new Error(`Rule type not found: ${ruleType}`)
  }

  await rulePage.verifyFinalFields(rule.expected)
})

Then('User clicks on Save Button', async function (this: CustomWorld) {

  const rulePage = this.pageManager.getPage(RuleCreation)
  const learningPage = this.pageManager.getPage(LearningManagementPage)

  // 🔥 ensure save is actually clickable
  await rulePage.saveLearning()

  // 🔥 ONLY for create flow
  // (optional: add condition if needed later)
  await learningPage.isAddNewLearningVisible()
})