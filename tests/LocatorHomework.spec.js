/*
Exercise 1 – Text Input
<input type="text" id="username" placeholder="Enter Username">
Find using
getByPlaceholder() 
await page.getByPlaceholder("Enter Username")
locator()
await page.locator("#username")
CSS
await page.locator('input[type="text"]')
XPath
await page.locator("//input[@type='text']")
--------------------------------------------------------------------------------------------------------

Exercise 2 – Password Input
<input
type="password"
name="password"
placeholder="Enter Password">
Find using
getByPlaceholder()
await page.getByPlaceholder("Enter Password")
locator()
await page.locator('input[placeholder*="Enter Password"]')
CSS
await page.locator('input[placeholder="Enter Password"]')
await page.locator('input[name="password"]')
await page.locator('input[type="password"]')
await page.locator('input[placeholder^="Enter "]')
await page.locator('input[placeholder$=" Password"]')
await page.locator('input[placeholder*="Enter Password"]')
XPath
await page.locator('//input[@name="password"]')

---------------------------------------------------------------------------------------------------------
Exercise 3 – Email Input
<input
type="email"
id="email"
name="email"
aria-label="Email Address">
Find using
getByLabel()
await page.getByLabel("Email Address")
await page.getByRole("textbox",{name:"Email Address"})
locator()
await page.locator("#email")
CSS
await page.locator("input[id='email']")
await page.locator("input[name='email']")
await page.locator("input[type='email']")

XPath
await page.locator("//input[@id='email']")
await page.locator("//input[@name='email']")
await page.locator("//input[@type='email']")
await page.locator("//input[@label^='Email']")
await page.locator("//input[@label$='Email']")
await page.locator("//input[@label*='Email']")
-----------------------------------------------------------------------------------------------------------------
Exercise 4 – Search Box
<input
type="search"
placeholder="Search Products"
class="search-input">
Find using
getByPlaceholder()
await page.getByPlaceholder("Search Products")
CSS
await page.locator(".search-input")
await page.locator('input[type="search"]')
await page.locator('input[placeholder="Search Products"]')
await page.locator('input[class="search-input"]')
await page.locator('input[type^="search"]')
await page.locator('input[placeholder*="Search Products"]')
await page.locator('input[contains@type,"search-input"]')
XPath
await page.locator("//input[@placeholder='Search Products']")

-------------------------------------------------------------------------------------------------------------------
Exercise 5 – Phone Number
<input
type="tel"
id="mobile"
placeholder="Mobile Number"
maxlength="10">
Find using
getByPlaceholder()
await page.getByPlaceholder("Mobile Number")
locator()
await page.locator("#mobile")
CSS
await page.locator('input[type="tel"]')
await page.locator('input[id="mobile"]')
await page.locator('input[placeholder="Mobile Number"]')
await page.locator('input[placeholder^="Mobile "]')
await page.locator('input[placeholder$=" Number"]')
await page.locator('input[placeholder*="Mobile Number"]')
XPath
await page.locator('//input[@id="mobile"]')
await page.locator('//input[@placeholder="Mobile Number"]')
await page.locator('//input[@type="tel"]')
await page.locator('//input[starts-with(@placeholder,"Mobile Number")]')
await page.locator('//input[contains(@placeholder,"Mobile Number")]')
-----------------------------------------------------------------------------------------------------------------------
Exercise 6 – Hidden Label
<label for="city">City</label>
<input
id="city"
type="text">
Find using
getByLabel()
await page.getByLabel("City")
CSS
await page.locator("#city")
XPath
await page.locator("//input[@id='city']")
-------------------------------------------------------------------------------------------------------------------------
Exercise 7 – Readonly Input
<input
id="country"
value="India"   
readonly>
Find using
locator()
await page.locator("#country")
CSS
await page.locator('input[id="country"]')
await page.locator('input[value="India"]')                 
await page.locator('input[value^="In"]')
await page.locator('input[value$="dia"]')
await page.locator('input[value*="ndi"]')
XPath
await page.locator('//input[@id="country"]')
await page.locator('//input[@value="India"]')  
await page.locator('//input[contains(@id,"country")]')
await page.locator('//input[starts-with(@id,"country")]')
---------------------------------------------------------------------------------------
Exercise 8 – Disabled Input
<input
id="employeeId"
disabled
value="EMP001">
Find using
CSS
await page.locator("input[id='employeeId']")
await page.locator('input[value="EMP001"]')
await page.locator('input[value^="EMP0"]')
await page.locator('input[value$="001"]')
await page.locator('input[value*="P00"]')
await page.locator('input[value="EMP001"]')
await page.locator("input:disabled");
await page.locator("input[disabled]");

XPath
await page.locator("//input[@id='employeeId']")
await page.locator('//input[@value="EMP001"]')
await page.locator('//input[contains(@value,"EMP001")]')
await page.locator('//input[starts-with(@value,"EMP001")]')
await page.locator("//input[@disabled]");
locator()
await page.locator("#employeeId")

---------------------------------------------------------------------------------------------------------------
Exercise 9 – Multiple Attributes
<input
type="text"
id="firstName"
name="fname"
class="form-control"
placeholder="First Name">
Find using
id
await page.locator("#firstName")
name
await page.locator("input[name='fname']")
class
await page.locator(".form-control")
placeholder
await page.getByPlaceholder("First Name")
XPath using multiple attributes
await page.locator("//input[@name='fname']")
await page.locator("//input[@id='firstName']")
await page.locator("//input[@type='text']")        
await page.locator("//input[@placeholder='First Name']")
await page.locator("//input[contains(@id,'firstName')]")
await page.locator("//input[starts-with(@type,'text')]")  
CSS using multiple attributes
 await page.locator("input[placeholder='First Name']")
await page.locator("input[id^='firstName']")
await page.locator("input[type$='ext']")  
await page.locator("input[type*='ex']") 
await page.locator("input[name='fname']")
await page.locator("input[id='firstName']")
await page.locator("input[type='text']")     
-----------------------------------------------------------------------------------------------------------------
Exercise 10 – Dynamic ID
<input
id="user_45896"
name="username">
Find using
CSS starts-with
CSS contains
XPath starts-with
XPath contains
Exercise 11 – Ends With
<input
id="emp_username"
name="userName">
Find using
CSS ends with
XPath ends with (Hint: XPath 1.0 doesn't have a direct ends-with() function.)
Exercise 12 – Checkbox
<input
type="checkbox"
id="remember">
Find using
getByRole()
CSS
XPath
Exercise 13 – Radio Button
<input
type="radio"
id="male"
name="gender">
Find using
getByRole()
CSS
XPath
Exercise 14 – File Upload
<input
type="file"
id="resumeUpload">
Find using
locator
CSS
XPath
Exercise 15 – Number Input
<input
type="number"
id="age"
min="18"
max="60">
Find using
CSS
XPath
locator()
Exercise 16 – Date Picker
<input
type="date"
id="joiningDate">
Find using
CSS
XPath
locator()
Exercise 17 – Partial Placeholder
<input
placeholder="Enter your full name">
Find using
getByPlaceholder()
CSS contains
XPath contains
Exercise 18 – Multiple Similar Inputs
<input type="text" name="firstname">

<input type="text" name="lastname">

<input type="text" name="middlename">
Find only Last Name field using
CSS
XPath
locator()
Exercise 19 – Nested Input
<div class="login">
    <div class="form">
        <input
        type="text"
        id="user">
    </div>
</div>
Find using
Parent-child CSS
XPath
locator()
Exercise 20 – Tough Interview Question ⭐⭐⭐⭐
<div id="loginForm">

<label>Email</label>

<input
type="email"
id="email123"
name="userEmail"
placeholder="Enter Email"
class="form-control required">

<label>Password</label>

<input
type="password"
id="pass456"
name="userPassword"
placeholder="Enter Password"
class="form-control required">

<button>Login</button>

</div>
Find the Email input using:
getByPlaceholder()
locator()
CSS by id
CSS by class
CSS by attribute
CSS by multiple attributes
CSS starts-with
XPath by id
XPath by placeholder
XPath contains
XPath starts-with
Relative XPath





*/
//=================================================================================================================================
//====================================================================================================================================
//Exercise for all tags
//====================================================================================================================================
//=======================================================================================================================================
/*

Exercise 1 – Button
<button
id="loginBtn"
name="login"
class="btn btn-primary"
type="submit">
Login
</button>
Find using
id
await page.locator("#loginBtn")
name
await page.locator("button[name='login']")
class
await page.locator(".btn.btn-primary")
text
await page.getByText("Login")
type
await page.locator("button[type='submit']")
CSS attribute selectors
await page.locator("button[name='login']")
XPath
await page.locator("//button[@type='submit']")
getByRole()
await page.getByRole("button",{name='login'})
------------------------------------------------------------------------------------------------------------------------------
Exercise 2 – Link
<a
id="forgotPwd"
href="/forgot-password"
class="nav-link">
Forgot Password?
</a>
Find using
id
await page.locator("#forgotPwd")
href
await page.locator("link[href='/forgot-password']")
class
await page.locator(".nav-link")
link text
await page.getByText("Forgot Password")
partial link text
await page.locator("link"[starts-with(class,nav-link)])
await page.locator("link",[class*='link'])
CSS
await page.locator("link[class='nav-link']")
XPath
await page.locator("//link[@href='/forgot-password']")
getByRole()
await page.getByRole("link",{name:'Forgot Password'})
-----------------------------------------------------------------------------------------------------------------
Exercise 3 – Text Input
<input
type="text"
id="username"
name="userName"
placeholder="Enter Username"
class="form-control"
autocomplete="off">
Find using
id
await page.locator("#username")
name
await page.locator("input[name='userName']")
placeholder
await page.locator("input[placeholder='Enter Username']")
class
await page.locator(".form-control")
type
CSS
await page.locator("input[type='text']")
XPath
await page.locator("//input[@name='userName']")
getByPlaceholder()
await page.getByPlaceholder("Enter Username")
--------------------------------------------------------------------------------------------------------------------
Exercise 4 – Password Input
<input
type="password"
id="password"
name="password"
placeholder="Enter Password"
required>
Find using
id
await page.locator("#password")
name
await page.locator("input[name='password']")
placeholder
await page.getByPlaceholder("Enter Password")
required
await page.locator("input['required']")
type
await page.locator("input[type='password']")
CSS
await page.locator("input[placeholder='Enter Password']")
XPath
await page.locator("//input[@placeholder='Enter Password']")
----------------------------------------------------------------------------------------------------------------
Exercise 5 – Email Input
<input
type="email"
id="email"
name="email"
placeholder="Enter Email"
value="demo@test.com">
Find using
id
await page.locator("#email")
value
await page.locator("input[value='demo@test.com']")
name
await page.locator("input[name='email']")
placeholder
await page.getByPlaceholder("Enter Email")
CSS
await page.locator("input[type='email']")
XPath
await page.locator("//input[@type='email']")
by Role
awit page.getByRole("textbox")
------------------------------------------------------------------------------------------------------------------------
Exercise 6 – Text Area
<textarea
id="comments"
name="feedback"
placeholder="Write your feedback"
rows="5"
cols="40">
</textarea>
Find using
id
name
placeholder
rows
CSS
XPath
getByPlaceholder()
Exercise 7 – Select
<select
id="country"
name="country"
class="form-select">
<option value="">Select</option>
<option value="IN">India</option>
<option value="US">USA</option>
<option value="UK">United Kingdom</option>
</select>
Find using
id
name
class
CSS
XPath
getByRole()
-------------------------------------------------------------------------------------------------------------------------
Exercise 8 – Option
<option
value="IN"
selected>
India
</option>
Find using
value
await page.locator("option[value='IN']")
selected
await page.locator(option[selected])
text
await page.getByRole("option",{name:'India'})

CSS
XPath
--------------------------------------------------------------------------------------------------------------------------
Exercise 9 – Image
<img
src="images/profile.png"
id="profilePic"
alt="Profile Picture"
title="User Profile"
width="200">
Find using
id
await page.locator("#profilePic")
alt
await page.locator("img[title='User Profile']")
src
title
width
CSS
XPath
getByAltText()
-------------------------------------------------------------------------------------------------------------------------
Exercise 10 – Table
<table
id="employeeTable"
class="table table-bordered">
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Department</th>
</tr>
</thead>

<tbody>

<tr>
<td>101</td>
<td>John</td>
<td>QA</td>
</tr>

<tr>
<td>102</td>
<td>Alice</td>
<td>Automation</td>
</tr>

</tbody>
</table>
Find using
table id
class
row
column
specific cell
CSS
XPath
getByRole()
-----------------------------------------------------------------------------------------------------------
Exercise 11 – Table Row (tr)
<tr
class="employee-row"
data-id="101">
<td>101</td>
<td>John</td>
<td>QA</td>
</tr>
Find using
class
data-id
CSS
XPath
----------------------------------------------------------------------------------
Exercise 12 – Table Cell (td)
<td
class="salary"
data-salary="65000">
65000
</td>
Find using
class
data attribute
text
CSS
XPath
Exercise 13 – Header (h1)
<h1
id="pageTitle"
class="heading">
Automation Practice
</h1>
Find using
id
class
text
CSS
XPath
getByRole()
Exercise 14 – Header (h2)
<h2
class="section-title"
data-section="contact">
Contact Us
</h2>
Find using
class
data attribute
text
CSS
XPath
Exercise 15 – Mixed Form (Real Interview Style)
<form id="registrationForm">

<h1>Create Account</h1>

<input
type="text"
id="firstName"
placeholder="First Name">

<input
type="text"
id="lastName"
placeholder="Last Name">

<input
type="email"
placeholder="Email">

<input
type="password"
placeholder="Password">

<textarea
placeholder="Address"></textarea>

<select id="country">

<option>India</option>
<option>USA</option>

</select>

<button
type="submit">
Register
</button>

<a href="/login">
Already have an account?
</a>

<img
src="logo.png"
alt="Company Logo">

</form>
Find locators for
Form
h1
First Name
Last Name
Email
Password
Address
Country
India option
Register button
Login link
Company Logo
Challenge Exercise (Advanced)
<div class="card">

<h2 class="title">
Laptop
</h2>

<img
src="laptop.png"
alt="Laptop Image">

<p>
Price: ₹75,000
</p>

<button class="buy">
Buy Now
</button>

<a href="/details">
View Details
</a>

</div>
Tasks
Locate the title.
Locate the image.
Locate the Buy button.
Locate the View Details link.
Locate the entire card.
Write CSS, XPath, and Playwright getBy* locators wherever applicable.

*/