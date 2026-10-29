import { Given, When, Then } from '@cucumber/cucumber'
import { CustomWorld } from '../world/customWorld'
import { LearningManagementPage } from '../pages/learningManagementPage'

Given('User is logged in', async function () {
  // handled via storage state
})

When(
  'User clicks on Setting button and navigates to Learning Management',
  async function (this: CustomWorld) {
    const page = this.pageManager.getPage(LearningManagementPage)
    await page.navigateToLearningManagement()
  }
)

When(
  'Learning Management page should be visible',
  async function (this: CustomWorld) {
    const page = this.pageManager.getPage(LearningManagementPage)
    await page.verifyPageLoaded()
  }
)


Then('User opens Create Scope modal', async function (this: CustomWorld) {
  const page = this.pageManager.getPage(LearningManagementPage)
  await page.openCreateScopeModal()
})

Then('User clicks on Scope type dropdown and selects Genre', async function (this: CustomWorld) {
  const page = this.pageManager.getPage(LearningManagementPage)
  await page.selectScopeType()
})

Then('User enters unqiue Scope name', async function (this: CustomWorld) {
  const page = this.pageManager.getPage(LearningManagementPage)
  await page.enterUniqueScopeName()
})

When('User click on Generate Description', async function(this :  CustomWorld){
  const page = this.pageManager.getPage(LearningManagementPage)
  await page.enterDescriptionDescription()
  
})

 When('User clicks on Create New Scope Button', async function(this : CustomWorld){
const page = this.pageManager.getPage(LearningManagementPage)
 await page.clicknewScope()
 await page.verifyNewScope()
 })

Then('User clicks on Tier level Delete button and Deletes the Tierl rule',async function (this:CustomWorld) {
  const page = this.pageManager.getPage(LearningManagementPage)
  await page.DeleteTier()
})

Then('User clicks on Add New Learning button',async function (this:CustomWorld) {
  
  const page = this.pageManager.getPage(LearningManagementPage)
  page.AddNewLearning()

})

When('User clicks on Edit button', async function (this: CustomWorld) {
  const page = this.pageManager.getPage(LearningManagementPage)
  page.clickEdit()

})






