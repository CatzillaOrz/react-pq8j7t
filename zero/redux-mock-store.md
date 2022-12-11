# redux mock store

## how to Mock test server - config store

- cofig app.js
- install redux-mock-store
- import thunk from "redux-thunk";
- const composeEnhancers = window.**REDUX_DEVTOOLS_EXTENSION_COMPOSE** || compose;

## Async mock store & test firebase usage

- check ./test/actions/expenses.test.js
- test("should add expense to database and store", (done) => {

## Async AddExpensePage test case

- modify onSubmit of AddExpensePage.js
- modify AddExpensePage.test by using startAddExpense
- modify expect

## Async AddExpense Actions

- new function startAddExpense retrun Promise of Firebase push()
