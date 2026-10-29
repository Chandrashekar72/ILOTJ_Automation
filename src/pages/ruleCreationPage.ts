import { Locator, Page,expect } from "@playwright/test";
import { BasePage } from "./basePage" ; 
import { LearningManagementPage } from "./learningManagementPage";


export class RuleCreation extends BasePage{

     private chatboxField : Locator
     private sendButton : Locator
     private saveLearningButton: Locator
     private orderSeparationSpan: Locator
     private typeresponseOption : Locator
     private separationInputbox : Locator
    private newVariantLabel: Locator
     private learningTitleRHS : Locator
     private tierRHS : Locator
     private learningDescriptionRHS : Locator
     private conditions: Locator
        private wtaCondition: Locator
        private wntaCondition: Locator
        private viewEditExistingLearning: Locator
        private compareButton: Locator
private mergeConfirmText: Locator
private editWTAOption: Locator
private  editWNTAOption : Locator
private verifySaveOption : Locator
    constructor(page:Page){
        super(page)
        this.chatboxField =  page.getByRole('textbox', { name: 'Tell me more about this learning..' })
        this.typeresponseOption = page.locator('p').filter({ hasText: 'Or, type your response' }).first()
        this.sendButton =  page.locator("//button[@class='ChatComponent-module_sendButton__18iHG ChatComponent-module_active__1REPW']")
        this.saveLearningButton =  page.getByRole('button', { name: 'Save Learning' })
        this.orderSeparationSpan = page.locator("//span[normalize-space()='1. Order Separation']")
        this.typeresponseOption =  page.locator('p').filter({ hasText: 'Or, type your response' }).first()
        this.separationInputbox = page.getByPlaceholder('Enter your input...')

        this.learningTitleRHS =  page.getByRole('textbox', { name: 'Enter a short, descriptive title for the learning' })
        this.tierRHS = page.getByRole('checkbox', { name: 'Tier 1' })
        this.learningDescriptionRHS = page.getByRole('textbox', { name: 'Explain the learning behaviour' })
        this.conditions = page.locator('//textarea[@placeholder="Enter your condition"]')
        this.verifySaveOption = page.getByText('Yes, save', { exact: true })

this.wtaCondition = this.conditions.nth(0)
this.wntaCondition = this.conditions.nth(1)

this.newVariantLabel = page.getByText('New Variant', { exact: true })
this.viewEditExistingLearning = page.getByText('View or edit the existing learning', { exact: false })
this.compareButton = page.getByRole('button', { name: 'Compare' })
this.mergeConfirmText = page.getByText('Yes, proceed with the merge', { exact: true }).nth(0
)
    this.editWTAOption = page.getByText('Edit When to Apply', { exact: true })
     this.editWNTAOption = page.getByText('Edit When NOT to Apply', { exact: true })
     


       
    }

    async sendMessage(text: string) {
    await this.chatboxField.fill(text)
      await this.page.waitForTimeout(1000) // 1 second delay
    await this.click(this.sendButton)
          await this.page.waitForTimeout(1000) // 1 second delay


  }

  async verifyTier() {
  await this.isVisible(this.typeresponseOption)

}

  async verifyseparation(){
    await this.isVisible(this.separationInputbox)
  }

  async verifyWta(){
    await this.isVisible(this.separationInputbox)
  }

  async verifyWnta(){
      await this.isVisible(this.typeresponseOption)
  }
 
  async verifyWntaExemption(){
     await this.isVisible(this.separationInputbox)
  }




async verifyWtaWnta(state: any) {
  await this.toContainText(this.wtaCondition, state.wta)
  await this.toContainText(this.wntaCondition, state.wnta)
}

async verifyNewVariantLabel() {
  await this.isVisible(this.newVariantLabel)
}


async verifyVariantDiscarded() {
  await expect(this.newVariantLabel).not.toBeVisible()
}

async verifyExistingRuleLoaded(state: any) {
  await this.verifyFinalFields(state)
}

async clickCompare() {
  await this.isVisible(this.compareButton)
  await this.click(this.compareButton)
}

async verifyMergeOptionVisible() {
  await this.isVisible(this.mergeConfirmText)
}

// async verifyFinalFields(state: any) {

//   // Title (partial match)
//   await this.toContainText(this.learningTitleRHS, state.title)

//   // Description (partial match)
//   await this.toContainText(this.learningDescriptionRHS, state.description)

//   // Tier (checked)
//   await this.toBeChecked(this.tierRHS)
//   await this.verifyWtaWnta(state)

  
// }

async verifyFinalFields(state: any) {

  const titleValue = await this.learningTitleRHS.inputValue()
  expect(titleValue).toContain(state.title)

  const descValue = await this.learningDescriptionRHS.inputValue()
  expect(descValue).toContain(state.description)

  await this.verifyWtaWnta(state)
}

async verifySave(){
    await this.isVisible(this.verifySaveOption)
}

async saveLearning() {
    await this.isVisible(this.verifySaveOption)

  await this.click(this.saveLearningButton)
}

}


