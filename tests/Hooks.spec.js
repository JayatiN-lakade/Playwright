import { test, expect } from '@playwright/test';
//import { test, expect } from '@playwright/test';

let page;
test.beforeAll( async ({ browser})=>{
    page = await browser.newPage();
    console.log("before all")
})

test.afterAll(async()=>{
    console.log("After all")
})

test("Test Hooks in playwright", async ({})=>{
    await page.goto("https://www.google.com/")
    console.log("console print 1")
});