# webpack dotenv

## config process.env.FIREBASE_API_KEY

- install -D dotenv
- webpack.config
- if()else if
- plugin: DefinePlugin({"process.env.FIREBASE_API_KEY": JSON.stringify(process.env.FIREBASE_API_KEY)})
  - note: must use JSON.stringify to serilze String type

## env file

- .env.development
- .env.test

## setupTest.js

- import dotenv and config('.env.test')
  - note: check ./jest.config.json includes <rootDir>... point to ./test folder
- DotEnv.config({ path: ".env.test" });

## webpack test

- test: cross-env NODE_ENV=test

## Replace ./firebase/firebase

```js
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: process.env.FIREBASE_API_KEY,
};
```

## how to Mock test server - config store

- install redux-thunk
- import thunk from "redux-thunk";
- const composeEnhancers = window.**REDUX_DEVTOOLS_EXTENSION_COMPOSE** || compose;
-
