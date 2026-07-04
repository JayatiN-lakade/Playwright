import { test, expect } from '@playwright/test';


test.skip('Keyboard Verification', async ({ page }) => {

    await page.goto("https://gotranscript.com/text-compare")
    await page.locator('[name="text1"]').fill("Hello")
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.down('Tab')
    await page.keyboard.press('Control+v')
    await page.waitForTimeout(5000)

});

test('Keyboard with Google', async ({ page }) => {
    await page.goto('https://www.google.com/')
    //await page.type('#APjFqb', "Automation testing ")
    await page.locator("#APjFqb").pressSequentially("Automation testing")
    await page.keyboard.press('ArrowLeft')

    for(let i=0;i<6;i++){
        await page.keyboard.press('Backspace')
    }
    await page.keyboard.press('Enter')
    await page.waitForTimeout(5000)
})