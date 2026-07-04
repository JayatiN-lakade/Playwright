import { test, expect } from '@playwright/test'

test("upload file test", async ({ page }) => {
    console.log("tests")
    await page.goto("https://demoqa.com/upload-download")
    //await page.locator('//input[@id="uploadFile"]').click()
    await page.locator('//input[@id="uploadFile"]').setInputFiles('C:\\Users\\Shree\\Study\\Playwright study\\Playwright\\tests\\input upload file\\Hello.txt')
    await expect('#uploadedFilePath').not.toHaveLength(0)
    await page.waitForTimeout(5000)

}) 

test.skip("upload multiple files test", async ({ page }) => {
    console.log("tests")
    await page.goto("https://demoqa.com/upload-download")
    //await page.locator('//input[@id="uploadFile"]').click()
    await page.locator('//input[@id="uploadFile"]').setInputFiles(['tests\\input upload file\\Hello copy.txt','C:\\Users\\Shree\\Study\\Playwright study\\Playwright\\tests\\input upload file\\Hello.txt'])
    await expect('#uploadedFilePath').not.toHaveLength(0)
    await page.waitForTimeout(5000)

}) 