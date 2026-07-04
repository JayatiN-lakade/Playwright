//import {test,expect} from "@playwright/test"

import {test,expect} from "@playwright/test"

test.skip("Test Login Page with Valid Creds",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("#username").fill("student")
    await page.locator("#password").fill("Password123")
    await page.locator("#submit").click()
    var logoutVar= await page.getByText("Log out")          

});

//Take screenshot of the page and save at the root level
test.skip("Take half screen shot of the web site", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.screenshot({path : "homepage.png"})
})
//Take visible screenshot  and save at folder
test("Take visible screenshot  and save at folder ", async({page})=>{
  await page.goto("https://practicetestautomation.com/practice-test-login/")
  await page.screenshot({path : "tests/screenshots/" + "homepage.png"})
  //to have unique image every time use date.now()
  //await page.screenshot({path: 'tests/screenshots/'+Date.now()+"homepage.png"})
})

//take screenshot of full page 
test("full page screen shot" ,async({page})=>{
      await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.screenshot({path : "tests/screenshots/"+ "fullpage.png",fullPage:true})
})

//Taking screenshot of the perticular element
test.only("Taking screenshot of the perticular element",async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("#username").screenshot({path: "tests/screenshots/"+"username.png"})
})