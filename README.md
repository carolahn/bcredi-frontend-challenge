<img src="./src/assets/images/bcredi-logo.svg" alt="Logo of the project" align="right">

# Bcredi Frontend Challenge &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

> Registry page - test for Front-end Developer

Project developed as part of Bcredi's selection process.
It is a user registration page.

As a user, the page allows you to register your e-mail, CPF, date of birth and password.
The input data is validated and it is not allowed to register e-mail in adverse format, invalid CPF, future or non-existent date of birth and password with less than 8 digits.
After validation, a message confirms the registration and the data is stored (at state values and at redux store - state.user.user) and printed on the console.

## Installing / Getting started

Installing the necessary dependencies and runs the application:

```shell
$ yarn install
$ yarn start
```

Using the Register page:

```shell
import Register from <register-path>

const App = () => {
  return (
    <Register />
  );
}
export default App;

```

To visit App:

```shell
localhost:3000
```

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

### Setting up Dev

To start developing the project:

```shell
$ git clone git@github.com:carolahn/bcredi-frontend-challenge.git
$ cd bcredi-frontend-challenge/
$ yarn install
$ yarn start
```

Runs the application on localhost: 3000.

### Deploying

- [Vercel deploy](https://bcredi-frontend-challenge-carolina-ahn.vercel.app/)

### Folder Structure

```shell
bcredi-frontend-challenge/
  README.md
  node_modules/
  package.json
  public/
  .gitignore
  yarn.lock
  cypress/
    integration/
      register.spec.js
  src/
    App.css
    App.js
    index.css
    index.js
    logo.svg
    reportWebVitals.js
    setupTests.js
    assets/
      images/
    components/
      banner/
      birth-input/
      checkbox-input/
      cpf-input/
      email-input/
      password-input/
      register-button/
      register-footer/
      register-form/
    containers/
      register-form/
    pages/
      register
    redux/
      actions/
      reducers/
      store/
```

### Get user info from redux store

```shell
import { useSelector } from "react-redux";
const userInfo = useSelector((state) => state.user.user);
console.log(userInfo);
```

### Authenticate user password with bcryptjs

```shell
const bcrypt = require('bcryptjs')
password = "123456789"
passwordHash = "$2a$10$MKX7CF1nsVQmrbiZGbWnlOyln8wR7UjyEQ79IOo9qu8rjNuqkbYEm"
bcrypt.compareSync(password, passwordHash)
// return true
```

## Tests

- Jest

```shell
$ yarn add --dev react-test-renderer
$ yarn test
```

- Enzyme

```shell
$ yarn add --dev enzyme enzyme-adapter-react-16
```

adapter (setupTests.js)

```shell
import "@testing-library/jest-dom/extend-expect";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
```

```shell
$ yarn test
```

- Cypress(5.6.0)

```shell
$ yarn add --dev cypress
$ yarn run cypress open
```

Select "register.spec.js" to watch the tests running.

## Style guide

- BEM - Block Element Modifier rules

## License

MIT licensed.
