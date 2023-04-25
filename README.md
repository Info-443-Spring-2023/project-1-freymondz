# FutureForward

## Created by: Duy Nguyen, Audrey Dennis, Jared Lim, Liliana Garcia, and Ria Antony

## Table of Contents

- [Introduction](#introduction)
- [About FutureForward](#about-futureforward)
- [Main Features](#main-features)
- [Set up](#set-up)
- [Diagrams](#diagrams)
  - [Code Base UML](#code-base-uml)
  - [Dataflow UML](#dataflow-uml)
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

FutureForward is a University of Washington INFO 442 web-app project created and designed to address UN Sustainable Development Goal 11: Sustainable Cities and Communities. We designed an implemented FutureForward to focus on increasing availability and accessibility of volunteering opportunities for highschool students in an effort to make cities more inclusive, resiliant and sustainable.

**Our Problem Statement:** How might we help high school students discover local volunteering opportunities that align with their interests to better serve their community?

The site is hosted at: <https://future5-7a3d2.web.app/>

## About FutureForward

Futureforward's mission is to connect highschool students to volunteering opportunities that resonate with their passions and interests along with their physical needs and abilities. FutureForward aims to provide opportunties that people can activitely participate in regardless of physical abilities.

All volunteer positions available were sourced by the Future5 team to ensure that the position requirements would fit the needs and interests of our target users. We sourced a variety of positions to ensure that these needs were met and that the user had varying options.

The positions and organizations we sourced for volunteering opportuntities were spread across a variety of topics included but not limited to:

- Eduacation
- Homelessness
- The arts
- Environment
- Senior care
- Health

## Main Features

- Home Page which displays all available volunteering opportunities, with descriptions, committment requirement and accesibility information
- Filtering System
  - Allows users to apply filters to a list of volunteer opportunties in their area
- Log in
  - Allows users to create a basic account with an email and password
  - Users can edit their saved interests and profile along with uploading an image to serve as their avatar
- Bookmark feature
  - Allows logged in users are also able to bookmark volunteer postions they are interested in and/or want to apply for in the future

## Set up

Install [Node.js](https://nodejs.org/en)

Run `npm install`

Install new libary: `npm install lib_name`

## Diagrams

### Code Base UML

![Code Base UML](images/Code%20Base%20UML.jpg)

### Dataflow UML

![Dataflow UML](images/Data%20Sequence%20UML.jpg)

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

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Code Structure Analysis

### Architectural Elements

`FutureForward` is a React web application that uses Firebase for authentication and database storage. The application is structured into the following components:

- `index.tsx` - This is the main entry point that renders the entire application. It also initializes the Firebase app and redux store.
- `App.tsx` - The main application component that renders the navbar, footer, and the main content of the application. This component also handles routing to different pages. This component would be the main user facing page.
  - `src/features` - Contains the React components that are used to render the different pages of the application.
    - `AboutPage/AboutPage.tsx` - React component that renders the about page. Relies on mui components for styling. The component itself is a basic about page that describes the purpose of `FutureForward`. There is also a embedded video that describes why volunteering is important.
    - `Dashboard/Dashboard.tsx` - React component that renders the dashboard page. Relies on mui components for styling. The component itself is a basic dashboard that displays the list of volunteer opportunities that the user has bookmarked. The component also allows the user to filter the list of bookmarked volunteer opportunities.
    - `FilterBar/`
      - `FilterBar.tsx` - React component that renders the filter bar. Relies on mui components for styling. The component itself is a basic filter bar that allows users to filter the list of volunteer opportunities by category, time commitment, and accessibility.
      - `FilterBarHelpers.ts` - Contains helper functions that are used to filter the list of volunteer opportunities.
      - `FilterList.tsx` - React component that renders the filter list. Relies on mui components for styling. The component itself is a basic filter list that displays the list of filters that the user has selected.
      - `FiltersSlice.ts` - Contains the redux slice that is used to store the list of filters that the user has selected.
    - `HomePage/`
      - `HomePage2.tsx` - React component that renders the home page. Relies on mui components for styling. The component itself is a basic home page that displays the list of volunteer opportunities. The component also allows the user to filter the list of volunteer opportunities.
      - `HomePage2.test.tsx` - Contains the unit tests for the home page.
      - `matchmedia.mock.ts` - Contains the mock for the matchmedia library.
    - `Interest/InterestSlice.tsx` - Contains the redux slice that is used to store the list of interests that the user has selected.
    - `NavBar/`
      - `NavBar.tsx` - React component that renders the navbar. Relies on mui components for styling. The component itself is a basic navbar that allows the user to navigate to different pages of the application.
      - `Footer.tsx` - React component that renders the footer. Relies on mui components for styling. The component itself is a basic footer that displays the list of links to the different pages of the application.
    - `Positions/`
      - `PositionList.tsx` - React component that renders the list of volunteer opportunities. Relies on mui components for styling. The component itself is a basic list of volunteer opportunities that displays the list of volunteer opportunities that the user has bookmarked. The component also allows the user to filter the list of bookmarked volunteer opportunities.
      - `PositionListItem.tsx` - React component that renders a single volunteer opportunity. Relies on mui components for styling. The component itself is a basic volunteer opportunity that displays the details of a single volunteer opportunity.
      - `PositionSlice.ts` - Contains the redux slice that is used to store the list of volunteer opportunities.
      - `Recommedation.tsx` - React component that renders the recommendation. Relies on mui components for styling. The component itself is a basic recommendation that displays the list of volunteer opportunities that the user might be interested in.
    - `UserDataDialog/`
      - `UserDataDialog.tsx` - React component that renders the user data dialog. Relies on mui components for styling. The component itself is a basic user data dialog that allows the user to enter their name and select their interests.
      - `UserDataSlice.tsx` - Contains the redux slice that is used to store the user data.

### Process Flows

## Architectural Assessment

We choose to use `src/features/HomePage/HomePage2.tsx` as our architectural element to assess. There are number of code smells that we identified in this file.

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
- Shows the `show filter` button in it's default state
- Hides the `show filter` button when a user clicks on it
- Hides the fiter bar in it's default state
- Shows the filter bar when a user clicks on the `show filter` button
- Validates the state of the filter bar when a user clicks on the `show filter` button
- Verifies filter bar it togglable
- Home page resizes when the window width is small enough 
- Filter button works when the window width is small enough

### Coverage

![code-coverage](https://user-images.githubusercontent.com/37636251/233745680-bddf697c-a656-40dc-af61-a7e3acc2cc2a.png) (Expected code coverage reported generated by Jest)

Jest will generate a coverage report of every component in the project but we only have unit tests for `HomePage2.tsx`. `matchmedia.mock.ts` is a Jest mock that mocks `window.matchMedia()` so that we can test the responsiveness of the home page.

## Refactoring
