# Dish - Front End React App

Currently used and tested, stable Nodejs version - 16.15.1
Stack - Typescript, React.js, Formik, Yup, Axios, React Testing Library, Jest, Material UI, styled-components
Hosting - ...

(To enable yarn in Node.js >= 16.10):
## General Info 

Simple application allowing to create a dish using a form and sending a POST request to a service that informs the user about the result of their query.

## Setup
I would like to present a front-end project built using the React.js with TypeScript. This project stands out for its exceptional code quality and the use of best programming practices.

To ensure proper form handling, two libraries were used: Formik for managing form state and Yup for form validation. Axios library was used for communication with the API, providing extremely easy and transparent HTTP request creation.

The UI of the application was created using the Material UI library, which offers many ready-made components, and styled-components, which allows for easy creation of custom styles for components.

Tests were implemented using React Testing Library along with Jest.

To maintain a consistent style and syntax in the project, tools such as ESLint and Prettier were used, and their rules were defined in configuration files.

Git was used as the version control system, and the repository is hosted on Github. The project structure was carefully designed to facilitate its development and maintenance. Implemented good programming practices (DRY, KISS, DDD) aim to maintain clean and readable code.

I am confident that this project stands out for its high code quality and the use of best programming practices, which allows for easy further development of the application.
## Installation
Installing dependencies:

```cmd
food/dish> yarn install
```

## Development
Serve app locally:

```cmd
food/dish> yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

```cmd
food/dish> yarn build
```
## Test

```cmd
food/dish> yarn test
```

## Eslint
Fix problem with prettier:
```cmd
food/dish> yarn lint-fix
```
Check prettier:
```cmd
food/dish> yarn lint-check
```