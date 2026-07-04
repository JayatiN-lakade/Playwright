import {test,expect} from '@playwright/test'    
    
  
test("test locators-getByRole" , async ({page})=>{
    await page.goto("https://www.qa-practice.com/elements/button/simple")
    //await page.getByRole("button",{name:"Click"}).click()
await page.getByRole("button",{type: "submit"}).click()
})


test("Test Locator - getByLabel",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel("Username").fill("student")
})

test("Test locator by text",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-exceptions/")
    await page.getByRole("button",{name: "Add"}).click()
    await page.waitForTimeout(8000)
    await expect(page.getByText("Row 2")).toBeVisible()
})

/*
Excercise 1 
<button id="login-btn">Login</button>

await page.getByRole("button",{id="login-btn"})
await page.getbyTitle("Login")
await page.locator("#login-btn")
await page.locator('[id="login-btn"]')
await page.locator("//button[@id='login-btn']")
await page.getByText("Login")
await page.locator(id^="login")
await page.locator(id$="btn")
await page.locator(id*="login")
*/


/*
Excercise 2 
<label for="email">Email</label>
<input
id="email"
type="email"
placeholder="Enter email"
name="email">


✅ getByRole()
await page.getByRole("input",{name="Email"})

✅ getByLabel()
await page.getByLabel("email")

✅ getByPlaceholder()
await page.getByPlaceholder("Enter email")

✅ locator()
await page.locator("#email")

✅ CSS
await page.locator("input#email")

✅ XPath
await page.locator("//input[@type='email']")
*/


/*
Excercise 3 
<img
src="logo.png"
alt="Company Logo"
title="Logo">

Find using

getByAltText()
await page.getByAltText("Company Logo") 
getByTitle()
await page.getByTitle("Logo")
locator()
await page.locator("")
CSS
await page.locator("img#Logo")
XPath
awai page.locator("//img[title='Logo']")
*/


/*Excercise 4 
<a href="/products">
Products
</a>

getByRole()
await page.getByRole("link",{name='Products'})
getByText()
await page.getBytext("Products")
locator()
await page.locator("a[href="/products"])
XPath
await page.locator("//a[@href='/products']")

*/

/*Exercise 5
<textarea
name="comments"
aria-label="Comments"
placeholder="Write here">
</textarea>

Target

Find 12 ways

1. await page.getByPlaceholder("Write here")
2. await page.locator("textarea[name='comments']")
3. await page.getByLabel("Comments")
4. await page.locator("//textarea[@name='comments']")
5. await page.locator(placeholder ^= 'Write')
6. await page.locator(placeholder $= 'here')    
7. await page.locator(placeholder *= 'Write')     
8. await page.locator("Commnets")           
*/


/*
Exercise 6
<select id="country">
<option>India</option>
<option>USA</option>
</select>

Find using

getByRole()
await page.getByRole("comboBox",{id:'country'})
locator()
await page.locator("#country")
CSS
await page.locator("[id='country']")
XPath
await page.locator("//select[id='country']")
*/

/*
Exercise 7
<input
type="checkbox"
id="terms">

<label for="terms">
Accept Terms
</label>

Find the checkbox

using

getByRole()
getByLabel()
locator()
CSS
XPath
*/              