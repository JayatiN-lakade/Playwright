import { test, expect } from '@playwright/test'

test.skip("Verification if of radio boxes", async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.locator("#gender-radio-1").check()
    await page.waitForTimeout(2000)
    const radiobutton1 = page.locator("#gender-radio-3")
    const radiobutton2 = page.locator("#gender-radio-2")
    await radiobutton2.check()
    await radiobutton1.setChecked(true)

    await expect(radiobutton1).toBeChecked()

    await page.waitForTimeout(5000)
})

test("Varification of checkbox", async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.locator("#hobbies-checkbox-1").check()
    await page.waitForTimeout(2000)
    await page.locator("#hobbies-checkbox-1").uncheck()
    await page.waitForTimeout(2000)
    const checkBox = page.locator("#hobbies-checkbox-1")
    await page.locator("#hobbies-checkbox-1").setChecked(true)
    await page.waitForTimeout(2000)

    await expect(checkBox).toBeChecked()
    await expect(checkBox).toBeEnabled()
})