# FutureForward

## Created by: Duy Nguyen, Audrey Dennis, Jared Lim, Liliana Garcia, and Ria Antony

## Table of Contents

- [Introduction](#introduction)
- [About FutureForward](#about-futureforward)
- [Main Features](#main-features)
- [Set up](#set-up)
- [Available Scripts](#available-scripts)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
- [Code Structure Analysis](#code-structure-analysis)
  - [Architectural Elements](#architectural-elements)
  - [Process Flows](#process-flows)
- [Architectural Assessment](#architectural-assessment)
- [Automated Tests](#automated-tests)
- [Refactoring](#refactoring)

## Introduction

FutureForward is a University of Washington INFO 442 web-app project created and designed to address UN Sustainable Development Goal 11: Sustainable Cities and Communities. We designed and implemented FutureForward to focus on increasing availability and accessibility of volunteering opportunities for high school students in an effort to make cities more inclusive, resilient and sustainable.

**Our Problem Statement:** How might we help high school students discover local volunteering opportunities that align with their interests to better serve their community?

The site is hosted at: <https://future5-7a3d2.web.app/>

## About FutureForward

Futureforward's mission is to connect high school students to volunteering opportunities that resonate with their passions and interests along with their physical needs and abilities. FutureForward aims to provide opportunities that people can actively participate in regardless of physical abilities.

All volunteer positions available were sourced by the Future5 team to ensure that the position requirements would meet the needs and interests of our target users. We sourced a variety of positions to ensure that these needs were met, and that the user had varying options.

The positions and organizations we sourced for volunteering opportunities were spread across a variety of topics included but not limited to:

- Education
- Homelessness
- The arts
- Environment
- Senior care
- Health

## Main Features

- Home Page which displays all available volunteering opportunities, with descriptions, commitment requirement and accessibility information
- Filtering System
  - Allows users to apply filters to a list of volunteer opportunities in their area
- Log in
  - Allows users to create a basic account with an email and password
  - Users can edit their saved interests and profile along with uploading an image to serve as their avatar
- Bookmark feature
  - Allows logged in users are also able to bookmark volunteer positions they are interested in and/or want to apply for in the future

## Set up

Install [Node.js](https://nodejs.org/en)

Run `npm install`

Install new library: `npm install lib_name`

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

![image](https://user-images.githubusercontent.com/37636251/233745680-bddf697c-a656-40dc-af61-a7e3acc2cc2a.png)

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Code Structure Analysis

### Architectural Elements

`FutureForward` is a React web application that uses Firebase for authentication and database storage. The application is structured into the following components:

- `index.tsx` - This is the main entry point that renders the entire application. It also initializes the Firebase app and redux store. Relies on React, Redux, and Firebase.
- `store.ts` - This is the redux store that is used to store the state of the application. Relies on component level slices for typing/reduces. It also exposes reducers that are used throughout the application. Relies on Redux.
- `App.tsx` - The main application component that renders the navbar, footer, and the main content of the application. This component also handles routing to different pages. This component would be the main user facing page. Relies on components from `src/features` for rendering the main content of the application. Relies on React Router for routing.
  - `src/features` - Contains the React components that are used to render the different pages of the application.
    - `AboutPage/AboutPage.tsx` - React component that renders the about page. Relies on mui components for styling. A basic about page that describes the purpose of `FutureForward`. There is also a embedded video that describes why volunteering is important. Relies on React/mui
    - `Dashboard/Dashboard.tsx` - React component that renders the dashboard page. Relies on mui components for styling. Dashboard that displays the list of volunteer opportunities that the user has bookmarked. The component also allows the user to filter the list of bookmarked volunteer opportunities. Relies on React/mui, Redux, and Firebase. Also renders `PositionListItem`.
    - `FilterBar/`
      - `FilterBar.tsx` - React component that renders the filter bar. Relies on mui components for styling. A filter bar that allows users to filter the list of volunteer opportunities. Renders `FilterList` and relies on React/mui.
      - `FilterBarHelpers.ts` - File that does nothing. Has no dependencies or dependents.
      - `FilterList.tsx` - React component that renders the filter list. Relies on mui components for styling and React. Displays the list of filters that the user has selected.
      - `FiltersSlice.ts` - Contains the redux slice that is used to store the list of filters that the user has selected. Also exposes typing for the redux slice. Relies on Redux.
    - `HomePage/`
      - `HomePage2.tsx` - React component that renders the home page. Relies on mui components for styling and React. Home page that displays the list of volunteer opportunities and navigation. The component also allows the user to filter the list of volunteer opportunities. Renders the `FilterBar` and `PositionList` component.
      - `HomePage2.test.tsx` - Contains the unit tests for the home page. Uses `matchmedia.mock` to properly test the `HomePage2` component. Relies on redux, firebase, and React Testing Library.
      - `matchmedia.mock.ts` - Contains the Jest mock for the matchmedia library.
    - `Interest/InterestSlice.tsx` - Contains the redux slice that is used to store the list of interests that the user has selected for volunteering. Also exposes typing for the redux slice. Relies on Redux.
    - `NavBar/`
      - `NavBar.tsx` - React component that renders the navbar. Relies on mui components for styling. Navbar that allows the user to navigate to different pages of the application. Relies on React/mui, Redux, and Firebase.
      - `Footer.tsx` - React component that renders the footer. Relies on mui components for styling. The component itself is a basic footer. Relies on React/mui.
    - `Positions/`
      - `PositionList.tsx` - React component that renders the list of volunteer opportunities. Relies on mui components for styling. Is a basic list of volunteer opportunities. The component also allows the user to filter the list of bookmarked volunteer opportunities. Relies on React/mui, Redux, and Firebase. Also renders `PositionListItem`.
      - `PositionListItem.tsx` - React component that renders a single volunteer opportunity. Relies on mui components for styling. Displays the details of a single volunteer opportunity. Relies on React/mui, Redux, and Firebase.
      - `PositionSlice.ts` - Contains the redux slice that is used to store the list of volunteer opportunities. Also exposes typing for the redux slice. Relies on Redux.
      - `Recommedation.tsx` - This is file is defined as a React component but only exposes TS functions. The functions help sort volunteer opportunities based on the user's interests. Relies on `userDataSlice` for typing.
    - `UserDataDialog/`
      - `UserDataDialog.tsx` - React component that renders the user data dialog. Relies on mui components for styling. Allows the user to to setup their profile. Relies on React/mui, Redux, and Firebase. Uses `UserDataSlice` to store the user data.
      - `UserDataSlice.tsx` - Contains the redux slice that is used to store the user data. Also exposes typing for the redux slice. Relies on Redux.

![Code Base UML](images/Code%20Base%20UML.jpg) Code Base UML

This is a UML diagram of the code base. The diagram shows how the different components of the application interact with each other.

### Process Flows

The System starts within `index.tsx`, where React will render the application and initialize Redux and its extension libraries such as React Redux Firebase and Persist. This is also where the application will create a connection with Firebase.

![Figure 1. The Default Render of the application (Top)](https://user-images.githubusercontent.com/37636251/235554829-9572afe1-4f8d-42ed-b051-1ac7712a96d7.png) Figure 1. The Default Render of the application (Top)

![Figure 1.1. The Default Render of the application (Bottom)](https://user-images.githubusercontent.com/37636251/235554886-d1959c0f-dfef-47d6-8052-a77eca206759.png) Figure 1.1. The Default Render of the application (Bottom)

From `index.tsx`, the App component is called to render the application. Within the App component, the authentication state is decided based on the firebase state of the Redux Store object. Regardless of the user-authenticated state, the UserDataDialogue, NavBar, Routes, and Footer components will render.

The Routes components will control the routing process for applications with 4 open routes for unauthenticated users and 1 protected route for authenticated users. The open routes include `*`, `/`, `/Home`, and `/About`. However, the `*`, `/`, and `/Home` are interchangeable with each other. Within the `/Home` and `/About` routes, the HomePage and AboutPage components are rendered respectively. The default route for the application is the `/Home` route, therefore the HomePage component will render for all users upon their first time using the application. The protected route is `/Dashboard`. This route will only render the Dashboard component if the user is authenticated, otherwise, it will protect the component by rendering the HomePage component.

![Figure 2. NavBar Default Render](https://user-images.githubusercontent.com/37636251/235555298-934003d4-795e-46de-a851-32a637a745c9.png) Figure 2. NavBar Default Render

The NavBar component shows different navigation buttons for different routes. The buttons are Home, About, and Dashboard buttons. Each button will trigger a re-render of the Routes component to show the correct Route component according to the navigation route. The Home button will link to the `/Home` route, the About button will link to the `/About` route, and the Dashboard button will link to the `/Dashboard` route. However, the Dashboard button will only be visible if the user is authenticated.

The NavBar component will also present either a Sign In button or a User avatar button based on the user authentication state. If the user is not authenticated, a Sign In Button will be present. Upon clicking on the Sign In button, a pop-up window will show where the user can log in with Firebase. If they successfully logged in, the Redux Store will update the authentication state accordingly. Once the user is authenticated, the NavBar will re-render the Sign In button to replace it with the User Avatar Button.

![Figure 3. NavBar Logged-in Render](https://user-images.githubusercontent.com/37636251/235555572-2486e5c4-6c3c-4a56-9108-aa4e77b5be41.png) Figure 3. NavBar Logged-in Render

Upon clicking the User Avatar Button, the Navbar will show a menu under the User Avatar Button, where an Edit Profile Button and Logout Button are shown. If the Logout button is clicked, the user will be logged out of the system and the Redux store will update to reflect so. This will also cause the NavBar to return to its not authenticated state.

![Figure 4. UserDataDialogue Initial Render](https://user-images.githubusercontent.com/37636251/235555609-09441dc2-f11b-47f3-9b74-e6310b015901.png) Figure 4. UserDataDialogue Initial Render

When the Edit Profile Button is clicked, the UserDataDialogue will be rendered visible to the user. From inside the Dialogue, the user can click on buttons that will alter their user data such as the Interests and Accessibility data. Both the Interest and Accessibility data employ the same mechanism to add and remove data when a button is clicked. Any changes to the user data will first be written to the Redux Store. The color of the button will be white when a piece of data is not selected but filled blue when it is selected. Furthermore, the user can also upload a profile image onto the application. The User Avatar will re-render to show the image when the user uploads an image. Upon clicking the Submit button, all user data and any profile image will be uploaded to Firebase. The UserDataDialogue will be re-rendered to invisible after this as well.

![Figure 5. HomePage Render with the Filter Bar and a PositionListItem shown](https://user-images.githubusercontent.com/37636251/235555714-26c72080-34be-4961-b064-9829ff0bd1d4.png) Figure 5. HomePage Render with the Filter Bar and a PositionListItem shown

The HomePage Component initially renders a list of position items pulled from Firebase. The sort order of this initial list is determined by the Interest and Accessibilities user data from Firebase. It will also show a Show Filter Button. This will cause a re-render to show the FilterBar Component upon being clicked. The text of the Show Filter Button will change to Hide Filter as well. From the Filter Bar component, the user can click on different checkboxes to filter out different position items. Each checkbox will cause a render of the position items upon being clicked. The position items will only show the items that have the selected filter attributes. The position items will also be sorted from most attributes to least.

Each position item will also have a bookmarked button inside of them as well. When clicked, the will update the user bookmark data on Firebase with the correct position item ID. The position item component will also have an expand down arrow button. Upon clicking, the position item will re-render to show hidden information about the position.

![Figure 6. Dashboard Component Render](https://user-images.githubusercontent.com/37636251/235555768-bbef9714-79b5-4b2c-8088-04a5b800b1ca.png) Figure 6. Dashboard Component Render

The Dashboard component will connect with Firebase to pull the user Bookmark data. When it receives the data, it will render all position items bookmarked by the user. The position item components are reused from the HomePage Component. All position items will show a purple bookmark button. Upon clicking, the Dashboard component will update firebase to remove the item from the user bookmark data. When the data on Firebase finishes updating, the component will re-render to show the new bookmarked position items. From the Dashboard, the user can also edit the profile. This is the same mechanism used for the Edit Profile Button from the NavBar.

![Figure 7. Application Mobile Render](https://user-images.githubusercontent.com/37636251/235555813-737c3544-926a-4fae-bef0-ecb117064807.png) Figure 7. Application Mobile Render

If the application detects the user is on a mobile screen, All components will re-render to their mobile layout. However, they will retain all functionality from their bigger screen counterparts. Most of this is from the components from the Material UI library. However, the HomePage is the only component to switch from a Grid based layout to Column based layout.

![Figure 8. Full Diagram of the Process Flow](https://user-images.githubusercontent.com/37636251/235555873-069415b3-82af-4bb0-a381-21faf5c7b60e.png) Figure 8. Full Diagram of the Process Flow

<https://drive.google.com/file/d/12rnkNfLJ53l4yL5beCGnDC1Evb5R8wJe/view?usp=sharing> (Full Diagram Link)

The above Process flow diagram outlines how the system determines what to render and how data is updated.

## Architectural Assessment

We choose to use `src/features/HomePage/HomePage2.tsx` as our architectural element to assess. There are several code smells that we identified in this file.

- Commented out code `lines: 35-75`
- Inconsistent formatting `lines: 21, 35-111`
- Bad variable names `lines: 11, 21`
- Redundant conditional statements `lines: 22-24, 35,75`
- Redundant React components `lines 42-70, 80-103`
- Doesn't adhere to any JavaScript style guide `Entire file`

## Automated Tests

The unit tests for `HomePage2.tsx` can be found in the same directory as the component under `src/features/HomePage/`. Use `npm test` to run the unit tests.

The unit tests test the following:

- Renders without crashing
- Shows the `show filter` button in its default state
- Hides the `show filter` button when a user clicks on it
- Hides the filter bar in its default state
- Shows the filter bar when a user clicks on the `show filter` button
- Validates the state of the filter bar when a user clicks on the `show filter` button
- Verifies filter bar it togglable
- Home page resizes when the window width is small enough
- Filter button works when the window width is small enough

### Coverage

![code-coverage](https://user-images.githubusercontent.com/37636251/233745680-bddf697c-a656-40dc-af61-a7e3acc2cc2a.png) (Expected code coverage reported generated by Jest)

Jest will generate a coverage report of every component in the project, but we only have unit tests for `HomePage2.tsx`. `matchmedia.mock.ts` is a Jest mock that mocks `window.matchMedia()` so that we can test the responsiveness of the home page.

## Refactoring

We used prettier to standardize the styling/formatting of the code. Double quotes instead of single quotes, using semicolons, consistent spacing, etc. We also removed commented out code and cleaned up redundant conditional statements. Variable names were standardized to camel case and the control flow for the home page was simplified. Instead of copying and pasting the filter bar and filter button for each size of the screen we used variables and ternary operators to determine the state of the filter button and whether to render the filter bar or not. During the writing of our tests we also identified and fixed an issue with our event listener and `useEffect()`. Originally the event listener was added to the window every time the component was rendered. This caused the event listener to be called multiple times when the window was resized. We fixed this by adding a cleanup function to `useEffect()` that removes the event listener when the component is unmounted.
