import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddExpense,
  startSetExpenses,
  startEditExpense,
  addExpense,
  editExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
} from "../../actions/expenses";
import uuid from "uuid";
import { expenses } from "../fixtures/expenses";
import db from "../../firebase/firebase";

import { getDatabase, ref, set, child, get, onValue } from "firebase/database";
const dbRef = ref(getDatabase());
const createMockStore = configureStore([thunk]);

beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expenseData[id] = { description, note, amount, createdAt };
  });
  set(ref(db, "expenses"), expenseData).then((_) => {
    done();
  });
});

test("should setup remove expense aciton object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should remove expense from firebase", (done) => {
  const store = createMockStore({});
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "REMOVE_EXPENSE",
      id,
    });
    onValue(ref(db, "/expenses" + `/${id}`), (snapshot) => {
      console.log(snapshot.val());
      expect(snapshot.val()).toBeNull();
      done();
    });
  });
});

test("should setup edit expense aciton object", () => {
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

test("should edit expense from firebase", (done) => {
  const store = createMockStore({});
  const id = expenses[1].id;
  const updates = { amount: 39.757 };

  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "EDIT_EXPENSE",
      id,
      updates,
    });
    return onValue(ref(db, `/expenses/${id}`), (snapshot) => {
      //expect(snapshot.val().amount).toBe(updates.amount);
      done();
    });
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

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(addExpense(expenseData)).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        ...expenseData,
      },
    });
    onValue(
      ref(db, "/expenses/" + actions[0].expense.id),
      (snapshot) => {
        console.log(snapshot.val());
        expect({ id: expect.any(String), ...snapshot.val() }).toEqual({
          ...expenseData,
        });
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

test("should setup expenses action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses,
  });
});

test("should fetch the expneses from firebase", () => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "setExpenses",
      expenses,
    });
    done();
  });
});
