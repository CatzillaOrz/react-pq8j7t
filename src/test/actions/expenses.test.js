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
import db from "../../firebase/firebase";

import { getDatabase, ref, child, get, onValue } from "firebase/database";
const dbRef = ref(getDatabase());

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

const getDataById = (id) => {
  return get(child(dbRef, `expenses/${id}`));
};

test("should add expense to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = expenses[0];
  delete expenseData.id;
  expenseData.note = "test async";
  expenseData.description = "Mock async";

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData,
      },
    });
    onValue(
      ref(db, "/expenses/" + actions[0].expense.id),
      (snapshot) => {
        console.log(snapshot.val());
        expect(snapshot.val()).toEqual(expenseData);
        done();
      },
      {
        onlyOnce: true,
      }
    );
    /**
    getDataById(actions[0].expense.id).then((data) => {
      if (data.exists()) {
        console.log(data.val());
        expect(data.val()).toEqual(expenseData);
        done();
      } else {
        console.log("No data found");
      }
    });
    */
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
