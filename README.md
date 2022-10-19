# Topic Lab: CodePath Clone

## Overview
Imagine this. The time is a year from now. You completed the Web 102 Course with CodePath long ago, and since then, you've become an excellent web developer and fallen in love with web development ! Now, CodePath is redesigning their website, and they want to give this task to a CodePath alum like you to get it done right.

For this lab, you will create a clone of the CodePath.org website, which will have multiple pages of content through which the user can navigate. The basic webpage content and the needed React components have already been provided, and all you have to do is to implement the React Router to put everything in one piece.

## 🎯 Goals
By the end of this lab, you will be able to:
- [ ] Practice developing an application with React Router
- [ ] Access routes using a navigation bar with matched routes
- [ ] Visit different pages in the application by accessing different routes

## Application Features
### Core Features
- [ ] One `BrowserRouter` component to enable the React Router capabilities
- [ ] One `Routes` component that manages the routes corresponding to each webpage
- [ ] Four `Route` componenets corresponding to the following:
    - [ ] Home
    - [ ] About
    - [ ] Courses
    - [ ] Contact
- [ ] Modified navigation bar links to properly navigate to the created routes

### Stretch Feature
- [ ] Create a `NotFound` component and set up one additional route with it for when the user tries to access an invalid URL via the address bar.

## Resources
[W3Schools - React Router Tutorial](https://www.w3schools.com/react/react_router.asp)

[FreeCodeCamp - React Router Cheat Sheet](https://www.freecodecamp.org/news/react-router-cheatsheet/)

[React Tutorial - The React Router - YouTube](https://www.youtube.com/watch?v=aZGzwEjZrXc)

[React Router No Match (404) Example](https://v5.reactrouter.com/web/example/no-match)

## Lab Instructions
### Step 0: Set up your project
- [ ] Fork this starter code.
- [ ] Open your forked repository in Visual Studio Code.
- [ ] Setup the application.
    - [ ] Run `npm install` to install the proper dependencies.
    - [ ] Run `npm start` to run the application.

### 🎯 Checkpoint 1
After forking and opening up the starter code, you should see all the available components and some basic structure inside `App.js`. 

![](https://i.imgur.com/SR4gBsV.png)

And once you run the application, you should see the home page of the CodePath clone website.

![](https://i.imgur.com/5FcgQsz.png)

If you try to click the links on the navigation bar, you'll be navigated to the real CodePath.org pages because these `<a>` tags currently link to them. Later on, we're going to replace them with links to different pages within this application!

### Step 1: Set up React Router

React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL to create the effect of viewing different pages.

- [ ] To set up React Router, first we need to install it using npm in the Terminal:
> `npm install react-router-dom`

- [ ] Once you have React Router installed, we're going to import the necessary components in our `App.js` file. Add this line at the top of your `App.js`:
> `import { BrowserRouter, Routes, Route } from 'react-router-dom';`
- We're importing the `BrowserRouter`, which is one of [the available React Routers](https://v5.reactrouter.com/web/api/Router), as well as `Routes` and `Route`. We'll go more into what their purposes are in a second.

- [ ] Next, Let's get rid of everything inside the `div` element so we can set up our router. Then, we'll create a `BrowserRouter` component, and wrap the `Routes` component inside.

<center><image src="https://i.imgur.com/UZSBwzo.png"/></center>

<br/>

This way, we can let the `BrowserRouter` help us manage things such as how the user might go back and forth in the browser history, while `Routes` helps us organize our routes, enable them to work, and can decide which exact route to go to based on different situations.

### Step 2: Set up individual routes

To set up a `Route`, it's actually very simple! Let's create our first route using the `Home` component.

- [ ] To set up a route, create a `Route` component inside of `Routes`. Then, we need to define the `path` that leads to this route, in this case, a forward slash `/`, and define the `element`, which is the component that renders for this route.

<center><image src="https://i.imgur.com/esQK45J.png"/></center>

<br/>

Now look at your application again, and you'll see that the home page is back! This is because the current path (http://localhost:3000/) matches the path we defined (`/`), which is the default path.

![](https://i.imgur.com/vTCmJBE.png)

- [ ] Now, let's import the `About`, `Courses`, and `Contact` components that were included in the starter code, then create three more routes in the same way for the About Page, Courses Page, and Contact Page. We'll give them each a simple and descriptive path.

<center><image src="https://i.imgur.com/0sK91jI.png" width="500px"/></center>

<br/>

### 🎯 Checkpoint 2
Once you've set up these routes, you can go to your web app again, and add any of these paths that we defined to the URL, then you'll be navigated to the new page!

![](https://i.imgur.com/3q1spGZ.png)

### Step 3: Modify the navigation bar links

Now that we have our working routes, we just need to be able to navigate them easily. Remember that we had a navigation bar for our web app, so let's use that again.

- [ ] First, place the `Navbar` component inside the `<div>` tag inside `App.js` again but outside of the `BrowserRouter`. This way, regardless of which route is being rendered, our navigation bar will always render.

<center><image src="https://i.imgur.com/R2BjuJV.png" width="500px"/></center>

<br/>

- [ ] Next, go inside `Navbar.js` and modify all the `<a>` tags so that their `href` attribute now reference the paths that we've defined.

<center><image src="https://i.imgur.com/agjkDj3.png" width="500px"/></center>

<br/>

- And while we're at it, let's also wrap the CodePath logo inside an `<a>` tag and have it link to the home page with the `/` path.

<center><image src="https://i.imgur.com/uWY6Tfb.png" width="500px"/></center>

<br/>

### 🎯 Checkpoint 3

Now, go to your web app again, and you should be able to navigate between each page easily.

<center><image src="https://i.imgur.com/c0THomF.gif"/></center>

<br/>

### 🎉 Congratulations, you’ve completed your lab! 🎉

### 💡 Tip: Remember to come back and reference this lab when you need to do similar things in your project!

## Extra Practice
[A Complete Guide to React Router: Everything You Need to Know](https://ui.dev/react-router-tutorial)
