import { Page, Locator, expect } from '@playwright/test'
import { BasePage } from './basePage'

export class LearningManagementPage extends BasePage {
  private settingsLink: Locator
  private learningHeader: Locator
  private createNewScopeButton: Locator
  private scopeTypeDropdown: Locator
  private genreOption: Locator
  private scopeNameInput: Locator
  private generateDescriptionButton: Locator
  private createScopeButton: Locator
  private descriptionInput : Locator
  private Tier1Header : Locator
  private deleteTierButton : Locator
  private deletePopupButton : Locator
  private addNewLearningButton: Locator
  private teachMeSpan: Locator
  private editButton : Locator
  private createNewLearningButton : Locator
  // store value if needed later (assertions etc.)
  public scopeName: string = ''

  constructor(page: Page) {
    super(page)

    this.settingsLink = page.locator(
      'a[href*="Traffic%20Manager%20Mode/settings"]'
    )

    this.learningHeader = page.getByRole('heading', { name: /learning management/i })

    this.createNewScopeButton = page.getByRole('button', { name: /create new scope/i })

    this.genreOption = page.getByText('Genre', { exact: true })

    this.scopeTypeDropdown = this.page.locator('button:has-text("Select Scope Type")')

    this.scopeNameInput = page.getByPlaceholder('e.g. Global Learnings')
    
    this.generateDescriptionButton = page.getByText('Generate Description',{ exact :  true})

    this.createScopeButton = page.getByRole('button',{name : 'Create Scope'})

    this.descriptionInput = page.getByPlaceholder('Enter short description for scope')
    
    this.deleteTierButton = page.locator('button').filter({ hasText: 'Delete' }).first()

    this.deletePopupButton = page.getByRole('button', { name: 'Yes, Delete' })
    this.Tier1Header = page.locator("//h3[contains(normalize-space(),'Tier 1')]")
    
    this.addNewLearningButton = page.getByRole('button',{name: 'Add New Learning'})
    this.createNewLearningButton = page.getByRole('button', {name : 'Create New Learning'})
    this.teachMeSpan = page.locator("//span[contains(normalize-space(),'Teach Me OTJ')]")

    this.editButton = page.locator('button').filter({ hasText: 'Edit' }).first()


  }



  async navigateToLearningManagement() {
    await this.click(this.settingsLink)
    await this.click(this.learningHeader)
  }

  async verifyPageLoaded() {
    await this.isVisible(this.learningHeader)
  }

  async openCreateScopeModal() {
    await this.click(this.createNewScopeButton)
  }

  async selectScopeType() {
    await this.click(this.scopeTypeDropdown)
    await this.click(this.genreOption)
  }

  async enterUniqueScopeName() {
    this.scopeName = `AutomationScope ${Date.now()}-${Math.floor(Math.random() * 100)}`
    await this.scopeNameInput.fill(this.scopeName)
  }

  async enterDescriptionDescription(){
    await this.descriptionInput.fill(this.scopeName)
    await expect(this.descriptionInput).not.toHaveValue('', { timeout: 10000 })
  }
  
  async clicknewScope(){
    await this.click(this.createScopeButton)
  }

  async verifyNewScope(){
    await this.isVisible(this.page.getByRole('heading',{name: this.scopeName}))
  }

  async DeleteTier(){
    if (await this.createNewLearningButton.isVisible()){
      await this.click(this.createNewLearningButton)
    }
    else{
    await this.isVisible(this.Tier1Header)
    await this.click(this.deleteTierButton)
    await this.click(this.deletePopupButton)

    }

  }

  async AddNewLearning(){
    await this.click(this.addNewLearningButton)
    await this.isVisible(this.teachMeSpan)
  
  }

  

async isAddNewLearningVisible() {
  await this.isVisible(this.addNewLearningButton)
}

async clickEdit(){
  await this.click(this.editButton)
}
}


