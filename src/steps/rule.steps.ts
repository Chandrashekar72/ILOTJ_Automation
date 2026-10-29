// import { When, Then } from '@cucumber/cucumber'
// import { CustomWorld } from '../world/customWorld'
// import { RuleCreation } from '../pages/ruleCreationPage'
// import { LearningManagementPage } from '../pages/learningManagementPage'
// import testData from '../test-data/rules.json'

// When('User creates rule {string}', async function (this: CustomWorld, ruleKey: string) {

//   const rulePage = this.pageManager.getPage(RuleCreation)
//   const data: any = (testData as any)[ruleKey]

//   console.log(`\n🚀 Starting Rule Flow: ${ruleKey}`)

//   // ---------------- STEP 1 ----------------
//   console.log(`📤 Sending Rule: ${data.Rule}`)
//   await rulePage.sendMessage(data.Rule)

//   await this.page.waitForTimeout(1000)
//   console.log(`🔍 Verifying Tier`)
//   await rulePage.verifyTier()

//   // ---------------- STEP 2 ----------------
//   console.log(`📤 Sending Rule Type: ${data.ruleType}`)
//   await rulePage.sendMessage(data.ruleType)

//   await this.page.waitForTimeout(1000)
//   console.log(`🔍 Verifying Separation`)
//   await rulePage.verifyseparation()

//   // ---------------- STEP 3 ----------------
//   if (data.minTime) {
//     console.log(`📤 Sending Min Time: ${data.minTime}`)
//     await rulePage.sendMessage(data.minTime)

//     await this.page.waitForTimeout(1000)
//     console.log(`🔍 Verifying Tier (after minTime)`)
//     await rulePage.verifyTier()
//   }

//   // ---------------- STEP 4 ----------------
//   if (data.Enable) {
//     console.log(`📤 Sending Enable: ${data.Enable}`)
//     await rulePage.sendMessage(data.Enable)

//     await this.page.waitForTimeout(1000)
//     console.log(`🔍 Verifying WTA`)
//     await rulePage.verifyWta()
//   }

//   // ---------------- STEP 5 ----------------
//   console.log(`📤 Sending Tier Rule: ${data.tierRule}`)
//   await rulePage.sendMessage(data.tierRule)

//   await this.page.waitForTimeout(1000)
//   console.log(`🔍 Verifying WNTA`)
//   await rulePage.verifyWnta()

//   // ---------------- STEP 6 ----------------
//   console.log(`📤 Sending Global: ${data.global}`)
//   await rulePage.sendMessage(data.global)

//   await this.page.waitForTimeout(1000)
//   console.log(`🔍 Verifying WNTA (after global)`)
//   await rulePage.verifyWnta()

//   // ---------------- STEP 7 (EXEMPTION FLOW) ----------------
//   if (data.exemptionYes) {

//     console.log(`📤 Sending Exemption Yes: ${data.exemptionYes}`)
//     await rulePage.sendMessage(data.exemptionYes)

//     await this.page.waitForTimeout(1500) // ⬅️ slightly more wait here (important)
//     console.log(`🔍 Verifying Exemption Input`)
//   await rulePage.verifyseparation()

//     console.log(`📤 Sending Exemption Value: ${data.exemptionValue}`)
//     await rulePage.sendMessage(data.exemptionValue)

//     await this.page.waitForTimeout(1000)
//   }

//   console.log(`✅ Rule Flow Completed\n`)
// })


// // ---------------- SAVE RULE ----------------

// Then('User saves rule {string}', async function (this: CustomWorld, ruleKey: string) {

//   const rulePage = this.pageManager.getPage(RuleCreation)
//   const learningPage = this.pageManager.getPage(LearningManagementPage)

//   const data: any = (testData as any)[ruleKey]

//   console.log(`💾 Verifying Final Fields`)
//   await rulePage.verifyFinalFields(data.expected)

//   console.log(`💾 Saving Rule`)
//   await rulePage.saveLearning(learningPage)

//   console.log(`✅ Rule Saved Successfully\n`)
// })