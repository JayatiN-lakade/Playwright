import {test,expect} from "@playwright/test"

test("Verification of registration form ", async ({page})=>{
    await page.goto("https://qavalidation.com/demo-form/")

    await page.locator("#g4072-fullname").pressSequentially("Jayati")
    await page.locator("#g4072-email").pressSequentially("abc@gmail.com")
    await page.locator("#g4072-gender").selectOption("Female")
    await page.getByRole('radio', { name: /Above 5/i }).setChecked(true)
    //await page.locator('#g4072-skills-Functional\ testing').check()
    //await page.locator('#g4072-skills-Automation\ testing:visible')
    const options=await page.locator('//input[@type="checkbox"]').all()
    for (const i of options)
    {
        i.setChecked(true,{ force: true })
    }

    await page.waitForTimeout(3000)


})

test ("Test checkboxes validation", async ({page})=>{
    await page.goto("https://www.qa-practice.com/elements/checkbox/mult_checkbox")
    const boxN= await page.locator('//input[@name="checkboxes"]').all()
    for (const i of boxN){
        await boxN.first().Waitfor()
       await i.setChecked(true,{force : true})
    }
    await page.locator('//input[@type="submit"]').click()
    const result = await page.locator("#result-text")
    await expect(result).toHaveText("one, two, three")
})



test.skip('Select multiple checkboxes using a loop', async ({ page }) => {
    await page.goto('https://testing.qaautomationlabs.com/checkbox.php');

    // 1. Locate all checkbox elements within the "Multiple Checkbox Demo" section
    // We use a CSS selector that targets the inputs of type checkbox
    const checkboxes = await page.locator('input[type="checkbox"]').all();

    console.log("Found ${checkboxes.length} checkboxes. starting selection...");

    // 2. Loop through the array of locators
    for (const checkbox of checkboxes) {
        // Optional: Check if the checkbox is already checked before clicking
        if (!(await checkbox.isChecked())) {
            await checkbox.check();
        }
    }

    // 3. Verification: Ensure all checkboxes are actually checked
    for (const checkbox of checkboxes) {
        await expect(checkbox).toBeChecked();
    }
});

test.only("test checkbox with multi clicks", async ({page})=>{
    await page.goto("https://www.thewebtaylor.com/static/tutorials/dummy-checkbox/")
    const multiCheck = await page.locator(".dummy-checkbox.multiple").all()
    const countCheckbox= await page.locator('ul.dummy-checkbox.multiple').count()
    for(let i =0; i > countCheckbox ; i++){
        await i.setChecked(true)
    }
    // //console.log(multiCheck)
    // for( const i of multiCheck){
    //     await i.setChecked(true,{force:true})
    // }
})



// test.only("check all checkboxess under Multiple title", async ({ page }) => {
//     await page.goto("https://www.thewebtaylor.com/static/tutorials/dummy-checkbox/");

//     // 1. Locate the container that holds the "Multiple" checkboxes.
//     // On this page, each section is wrapped in a way that the heading 
//     // identifies the group.
//     const section = page.locator('div:has(h2:has-text("Multiple checkboxes"))');

//     // 2. Find all dummy checkboxes within that specific section
//     // These specific "dummy" checkboxes are spans with the class .dummy-checkbox
//     const checkboxes = section.locator(".dummy-checkbox");

//     // 3. Wait for the list to be ready
//     await checkboxes.first().waitFor();
//     const allBoxes = await checkboxes.all();

//     // 4. Iterate and check each one
//     for (const box of allBoxes) {
//         // Since these are "dummy" checkboxes (spans), we use .click() 
//         // to toggle them rather than .check()
//         await box.click();
//     }

//     // Optional: Verify they are checked
//     // (In this specific tutorial, checking them adds the 'checked' class)
//     for (const box of allBoxes) {
//         await expect(box).toHaveClass(/checked/);
//     }
// });