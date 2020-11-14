<img src="./src/assets/images/bcredi-logo.svg" alt="Logo of the project" align="right">

# Bcredi Frontend Challenge &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

> Registry page - test for Front-end Developer

Project developed as part of Bcredi's selection process.
It is a user registration page.

As a user, the page allows you to register your e-mail, CPF, date of birth and password.
The input data is validated and it is not allowed to register e-mail in adverse format, invalid CPF, future or non-existent date of birth and password with less than 8 digits.
After validation, a message confirms the registration and the data is stored (state values) and printed on the console.

## Installing / Getting started

```shell
yarn install
yarn start
```

Installs the necessary dependencies and runs the application

## Developing

### Built With

- react (16.8.0)
- styled-components (5.2.1)
- react-hook-form (6.11.0)
- fontawesome (1.2.32)
- bcriptjs (2.4.3)
- redux (4.0.5)
- react-redux (7.2.2)

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)

What is needed to set up the dev environment. For instance, global dependencies or any other tools. include download links.

### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone git@github.com:carolahn/bcredi-frontend-challenge.git
cd bcredi-frontend-challenge/
yarn install
yarn start
```

Runs the application on localhost: 3000.

### Building

If your project needs some additional steps for the developer to build the
project after some code changes, state them here. for example:

```shell
./configure
make
make install
```

Here again you should state what actually happens when the code above gets
executed.

#### Get user info from store

```shell
import { useSelector } from "react-redux";
const user_info = useSelector((state) => state.user.user);
console.log(user_info);
```

#### Authenticate user password

```shell
const bcrypt = require('bcryptjs')
password = "123456789"
passwordHash = "$2a$10$MKX7CF1nsVQmrbiZGbWnlOyln8wR7UjyEQ79IOo9qu8rjNuqkbYEm"
bcrypt.compareSync(password, passwordHash)
// return true
```

### Deploying / Publishing

give instructions on how to build and release a new version
In case there's some step you have to take that publishes this project to a
server, this is the right time to state it.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

## Versioning

We can maybe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).

## Configuration

Here you should write what are all of the configurations a user can enter when using the project.

## Tests

Describe and show how to run the tests with code examples.
Explain what these tests test and why.

```shell
Give an example
```

## Style guide

Explain your code style and show how to check it.

- BEM - Block Element Modifier rules

## Api Reference

If the api is external, link to api documentation. If not describe your api including authentication methods as well as explaining all the endpoints with their required parameters.

## Database

Explaining what database (and version) has been used. Provide download links.
Documents your database design and schemas, relations etc...

## Licensing

State what the license is and how to find the text version of the license.
