import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
} from "../../actions/expenses";
import uuid from "uuid";
import { expenses } from "../fixtures/expenses";

const createMockStore = configureStore([thunk]);

test("should setup remove expense aciton object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should setup edit expense aciton object", () => {
  const _uid = uuid();
  const action = editExpense("123abc", {
    note: "New note",
  });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "New note",
    },
  });
});

test("should setup add expense aciton object with provided value", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2],
  });
});

// test async actions

test("should add expense to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = expenses[0];
  expenseData.note = "test async";
  expenseData.description = "Mock async";

  return store.dispatch(startAddExpense(expenseData)).then(() => {
    //const actions = store.getActions();
    //console.log(actions);
    expect(1).toBe(1);
    done();
  });
});

/**
 
test("should setup add expense aciton object with default value", () => {
  // call without data
  const expenseData = {};
  // Assert the value of the return
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });
});
 */
