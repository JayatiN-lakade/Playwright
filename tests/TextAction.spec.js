import { test , expect } from '@playwright/test'

test("Test text field" , async ({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
     const firstName= await page.locator("#firstName")
    await expect(firstName).toBeEnabled()
    await expect(firstName).toBeVisible()
    await expect(firstName).toBeEditable()
   
    await firstName.fill("Jayati")
    await expect(firstName).toHaveValue("Jayati") //cant use directly on locator hence store value in variable 
      await expect(page.locator("h5")).toHaveText("Student Registration Form")
   // await page.waitForTimeout(5000)
})